import { motion } from "framer-motion";
import { Headphones, Volume2 } from "lucide-react";
import type { ListeningTask } from "@/features/listening/types";

export function ListeningUnitCard({
  task,
  completedUnits,
  navigate,
}: {
  task: ListeningTask;
  completedUnits: number[];
  navigate: any;
}) {
  // Assuming listening completed units might use an offset like reading (+200 maybe)
  // But let's just use task.unit_id + 200 for listening tasks progress
  const isCompleted = completedUnits.includes(task.unit_id + 200);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={() => navigate(`/listening/${task.level}/${task.unit_id}`)}
      className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm hover:border-blue-200 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between group"
    >
      <div className="flex items-center space-x-6">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
            isCompleted
              ? "bg-green-100 text-green-600"
              : task.level === "A2"
                ? "bg-orange-50 text-orange-600"
                : task.level === "B1"
                  ? "bg-purple-50 text-purple-600"
                  : task.level === "B2"
                    ? "bg-rose-50 text-rose-600"
                    : task.level === "C1"
                      ? "bg-indigo-50 text-indigo-700"
                      : "bg-blue-50 text-blue-600"
          }`}
        >
          {task.unit_id}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
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
          className={`px-6 py-2 shadow-md text-white rounded-xl font-bold transition-colors shadow-md flex items-center gap-2 ${
            task.level === "A2"
              ? "bg-orange-500 hover:bg-orange-600 shadow-orange-100"
              : task.level === "B1"
                ? "bg-purple-600 hover:bg-purple-700 shadow-purple-100"
                : task.level === "B2"
                  ? "bg-rose-600 hover:bg-rose-700 shadow-rose-100"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-100"
          }`}
        >
          <Headphones className="w-4 h-4" /> Dinle
        </button>
      </div>
    </motion.div>
  );
}
