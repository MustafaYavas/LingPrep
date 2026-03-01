import { motion } from "framer-motion";
import { Headphones, Volume2 } from "lucide-react";
import type { ListeningTask } from "@/features/listening/types";
import { getLevelStyles } from "@/utils/levelUtils";

export function ListeningUnitCard({
  task,
  completedUnits,
  navigate,
}: {
  task: ListeningTask;
  completedUnits: number[];
  navigate: any;
}) {
  const isCompleted = completedUnits.includes(task.unit_id + 200);
  const styles = getLevelStyles(task.level);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={() => navigate(`/listening/${task.level}/${task.unit_id}`)}
      className={`bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm ${styles.hoverBorder} transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between group`}
    >
      <div className="flex items-center space-x-6">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
            isCompleted ? "bg-green-100 text-green-600" : styles.badge
          }`}
        >
          {task.unit_id}
        </div>
        <div>
          <h3
            className={`text-xl font-bold text-slate-800 group-hover:${styles.text} transition-colors`}
          >
            {task.unit_title}
          </h3>
          <div className="flex items-center space-x-4 mt-1 text-sm text-slate-400">
            <span className="flex items-center">
              <Volume2 className="w-4 h-4 mr-1" />{" "}
              {task.focus_sounds.slice(0, 2).join(", ")}
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
          className={`px-6 py-2 shadow-md text-white rounded-xl font-bold transition-colors flex items-center gap-2 ${styles.button} cursor-pointer`}
        >
          <Headphones className="w-4 h-4" /> Dinle
        </button>
      </div>
    </motion.div>
  );
}
