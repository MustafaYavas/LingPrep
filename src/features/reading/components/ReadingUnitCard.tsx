import { motion } from "framer-motion";
import { Clock, FileText } from "lucide-react";
import { getLevelStyles } from "@/utils/levelUtils";

export function ReadingUnitCard({
  unit,
  completedUnits,
  navigate,
}: {
  unit: any;
  completedUnits: number[];
  navigate: any;
}) {
  const isCompleted = completedUnits.includes(unit.unit_id + 100);

  // Deduce level based on existing ReadingPage logic
  const level =
    unit.unit_id >= 13
      ? "C1"
      : unit.unit_id >= 10
        ? "B2"
        : unit.unit_id >= 7
          ? "B1"
          : unit.unit_id >= 4
            ? "A2"
            : "A1";

  const styles = getLevelStyles(level);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={() => navigate(`/reading/${unit.unit_id}`)}
      className={`bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm ${styles.hoverBorder} transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between group`}
    >
      <div className="flex items-center space-x-6">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
            isCompleted ? "bg-green-100 text-green-600" : styles.badge
          }`}
        >
          {unit.unit_id}
        </div>
        <div>
          <h3
            className={`text-xl font-bold text-slate-800 group-hover:${styles.text} transition-colors`}
          >
            {unit.title}
          </h3>
          <div className="flex items-center space-x-4 mt-1 text-sm text-slate-400">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {unit.word_count} kelime
            </span>
            <span className="flex items-center">
              <FileText className="w-4 h-4 mr-1" /> {unit.theme}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-0 flex items-center space-x-4">
        {isCompleted && (
          <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100 italic">
            Tamamlandı
          </span>
        )}
        <button
          className={`px-6 py-2 text-white rounded-xl font-bold transition-colors shadow-md ${styles.button} cursor-pointer`}
        >
          Başla
        </button>
      </div>
    </motion.div>
  );
}
