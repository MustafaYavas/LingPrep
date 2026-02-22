import { useAppSelector } from "@/store/hooks";
import { units } from "@/utils/utils";
import { Trophy, Flame, BookOpen, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { UnitSection } from "@/components/UnitSection";
import { useNavigate } from "react-router-dom";

export function QuizzesPage() {
  const navigate = useNavigate();
  const { currentScore, completedUnits, completedTests } = useAppSelector(
    (state) => state.progress,
  );

  const a1Units = units.filter((u) => u.level === "A1");
  const a2Units = units.filter((u) => u.level === "A2");
  const b1Units = units.filter((u) => u.level === "B1");
  const b2Units = units.filter((u) => u.level === "B2");
  const c1Units = units.filter((u) => u.level === "C1");

  const uiLevel =
    completedUnits.length >= 23
      ? "C1 İleri Seviye"
      : completedUnits.length >= 17
        ? "B2 İleri Seviye Öncesi"
        : completedUnits.length >= 11
          ? "B1 Orta Üstü"
          : completedUnits.length >= 5
            ? "A2 Orta Seviye"
            : "A1 Başlangıç";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Ana Sayfa
        </button>
      </div>

      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4"
        >
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Toplam Puan</p>
            <p className="text-2xl font-bold text-slate-800">{currentScore}</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4"
        >
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Biten Ünite</p>
            <p className="text-2xl font-bold text-slate-800">
              {completedUnits.length}
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4"
        >
          <div className="p-3 bg-green-100 text-green-600 rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Mevcut Seviye</p>
            <p className="text-2xl font-bold text-slate-800">{uiLevel}</p>
          </div>
        </motion.div>
      </div>

      {/* A1 Units List */}
      <UnitSection
        title="A1 Başlangıç Seviyesi"
        units={a1Units}
        completedUnits={completedUnits}
        completedTests={completedTests}
        iconColorClass="text-primary"
        badgeColorClass="bg-primary/10 text-primary"
        buttonColorClass="border-primary/20 text-primary hover:bg-primary"
      />

      {/* A2 Units List */}
      <UnitSection
        title="A2 Orta Seviye"
        units={a2Units}
        completedUnits={completedUnits}
        completedTests={completedTests}
        iconColorClass="text-orange-500"
        badgeColorClass="bg-orange-100 text-orange-600"
        buttonColorClass="border-orange-200 text-orange-600 hover:bg-orange-500"
        previousLevelLastUnitId={a1Units[a1Units.length - 1]?.id}
      />

      {/* B1 Units List */}
      <UnitSection
        title="B1 Orta Üstü Seviye"
        units={b1Units}
        completedUnits={completedUnits}
        completedTests={completedTests}
        iconColorClass="text-purple-500"
        badgeColorClass="bg-purple-100 text-purple-600"
        buttonColorClass="border-purple-200 text-purple-600 hover:bg-purple-500"
        previousLevelLastUnitId={a2Units[a2Units.length - 1]?.id}
      />

      {/* B2 Units List */}
      <UnitSection
        title="B2 İleri Seviye Öncesi"
        units={b2Units}
        completedUnits={completedUnits}
        completedTests={completedTests}
        iconColorClass="text-red-500"
        badgeColorClass="bg-red-100 text-red-600"
        buttonColorClass="border-red-200 text-red-600 hover:bg-red-500"
        previousLevelLastUnitId={b1Units[b1Units.length - 1]?.id}
      />

      {/* C1 Units List */}
      <UnitSection
        title="C1 İleri Seviye"
        units={c1Units}
        completedUnits={completedUnits}
        completedTests={completedTests}
        iconColorClass="text-indigo-500"
        badgeColorClass="bg-indigo-100 text-indigo-600"
        buttonColorClass="border-indigo-200 text-indigo-600 hover:bg-indigo-500"
        previousLevelLastUnitId={b2Units[b2Units.length - 1]?.id}
      />
    </div>
  );
}
