import { motion } from "framer-motion";
import { Clock, FileText } from "lucide-react";

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

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={() => navigate(`/reading/${unit.unit_id}`)}
      className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm hover:border-indigo-200 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between group"
    >
      <div className="flex items-center space-x-6">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
            isCompleted
              ? "bg-green-100 text-green-600"
              : unit.unit_id >= 13
                ? "bg-slate-100 text-slate-600"
                : unit.unit_id >= 10
                  ? "bg-red-50 text-red-600"
                  : unit.unit_id >= 7
                    ? "bg-purple-50 text-purple-600"
                    : unit.unit_id >= 4
                      ? "bg-orange-50 text-orange-600"
                      : "bg-indigo-50 text-indigo-600"
          }`}
        >
          {unit.unit_id}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
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
          className={`px-6 py-2 text-white rounded-xl font-bold transition-colors shadow-md ${
            unit.unit_id >= 13
              ? "bg-slate-700 hover:bg-slate-800 shadow-slate-100"
              : unit.unit_id >= 10
                ? "bg-red-600 hover:bg-red-700 shadow-red-100"
                : unit.unit_id >= 7
                  ? "bg-purple-600 hover:bg-purple-700 shadow-purple-100"
                  : unit.unit_id >= 4
                    ? "bg-orange-500 hover:bg-orange-600 shadow-orange-100"
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100"
          }`}
        >
          Başla
        </button>
      </div>
    </motion.div>
  );
}
