import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getLevelStyles } from "@/utils/levelUtils";

interface Unit {
  id: number;
  title: string;
  desc: string;
  level: string;
}

interface UnitSectionProps {
  title: string;
  units: Unit[];
  completedUnits: number[];
  completedTests: Record<number, string[]>;
  level: string;
  previousLevelLastUnitId?: number;
}

export function UnitSection({
  title,
  units,
  completedUnits,
  completedTests,
  level,
  previousLevelLastUnitId,
}: UnitSectionProps) {
  const navigate = useNavigate();
  const styles = getLevelStyles(level);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
        <span
          className={`w-2 h-8 ${styles.indicator} rounded-full mr-3`}
        ></span>
        {title}
      </h2>
      <div className="space-y-4">
        {units.map((unit, index) => {
          const isCompleted = completedUnits.includes(unit.id);

          let isAvailable = false;
          if (index === 0) {
            // İlk ünite ise ya başlangıçtır (previousLevelLastUnitId yoksa) ya da önceki seviyenin bittiği kontrol edilir
            isAvailable = previousLevelLastUnitId
              ? completedUnits.includes(previousLevelLastUnitId)
              : true;
          } else {
            // Önceki ünitenin bitip bitmediğine bakılır
            isAvailable = completedUnits.includes(units[index - 1].id);
          }

          return (
            <motion.div
              key={unit.id}
              whileHover={isAvailable ? { scale: 1.01 } : {}}
              className={`p-6 rounded-2xl border-2 flex flex-col transition-colors ${
                isAvailable
                  ? "bg-white border-slate-200 shadow-sm"
                  : "bg-slate-50 border-slate-100 opacity-60"
              }`}
            >
              <div className="flex items-center space-x-6">
                <div
                  className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center font-bold text-xl ${
                    isCompleted
                      ? "bg-green-100 text-green-600"
                      : isAvailable
                        ? styles.badge
                        : "bg-slate-200 text-slate-400"
                  }`}
                >
                  {unit.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {unit.title}
                  </h3>
                  <p className="text-slate-500">{unit.desc}</p>
                </div>
              </div>

              {isAvailable && (
                <div className="mt-6 flex flex-wrap gap-3 pl-[5.5rem]">
                  {[1, 2, 3].map((testNum) => {
                    const tId = `t${testNum}`;
                    const isTestCompleted =
                      completedTests?.[unit.id]?.includes(tId);
                    const isTestAvailable =
                      testNum === 1 ||
                      completedTests?.[unit.id]?.includes(`t${testNum - 1}`);

                    return (
                      <button
                        key={tId}
                        disabled={!isTestAvailable}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isTestAvailable)
                            navigate(`/quiz/${unit.id}/${tId}`);
                        }}
                        className={`px-5 py-2 text-sm rounded-full font-semibold transition-colors flex border-2 items-center cursor-pointer ${
                          !isTestAvailable
                            ? "opacity-50 cursor-not-allowed bg-slate-100 border-slate-200 text-slate-400"
                            : isTestCompleted
                              ? "bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                              : `bg-white ${styles.button} hover:text-white`
                        }`}
                      >
                        Test {testNum}
                      </button>
                    );
                  })}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
