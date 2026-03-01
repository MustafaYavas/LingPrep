import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchWritingTasks } from "@/features/writing";
import { motion } from "framer-motion";
import { PenTool, ArrowLeft, Clock } from "lucide-react";
import { getWordCountRange } from "@/utils/utils";

export function WritingPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tasks, status, error } = useAppSelector((state) => state.writing);
  const { completedUnits } = useAppSelector((state) => state.progress);

  useEffect(() => {
    dispatch(fetchWritingTasks("all"));
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Hata: {error}</p>
        <button
          onClick={() => dispatch(fetchWritingTasks("A1"))}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    );
  }

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

      <header className="mb-12">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-4 flex items-center">
          <PenTool className="mr-4 text-emerald-600 w-10 h-10" /> Writing
          Alıştırmaları
        </h2>
        <p className="text-lg text-slate-500">
          Yazma becerilerini geliştirmek için A1 düzeyinde özel görevler. Örnek
          metinlerle kıyaslama yaparak kendini geliştir.
        </p>
      </header>

      {/* A1 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-emerald-500 rounded-full mr-3"></span>
          A1 Başlangıç Seviyesi
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "A1")
            .map((task) => (
              <WritingTaskCard
                key={task.unit_id}
                task={task}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>

      {/* A2 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-teal-500 rounded-full mr-3"></span>
          A2 Orta Seviye
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "A2")
            .map((task) => (
              <WritingTaskCard
                key={task.unit_id}
                task={task}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>

      {/* B1 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
          B1 İleri Seviye
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "B1")
            .map((task) => (
              <WritingTaskCard
                key={task.unit_id}
                task={task}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>

      {/* B2 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
          B2 Üst-Orta Seviye
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "B2")
            .map((task) => (
              <WritingTaskCard
                key={task.unit_id}
                task={task}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>

      {/* C1 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
          C1 İleri Seviye (Advanced)
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "C1")
            .map((task) => (
              <WritingTaskCard
                key={task.unit_id}
                task={task}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

function WritingTaskCard({
  task,
  completedUnits,
  navigate,
}: {
  task: any;
  completedUnits: number[];
  navigate: any;
}) {
  // We use a different range for writing completion if needed, or just unit_id + offset
  const isCompleted = completedUnits.includes(task.unit_id + 200);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={() => navigate(`/writing/${task.unit_id}`)}
      className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm hover:border-emerald-200 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between group"
    >
      <div className="flex items-center space-x-6">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${
            isCompleted
              ? "bg-green-100 text-green-600"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {task.unit_id}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
            {task.task_title}
          </h3>
          <div className="flex items-center space-x-4 mt-1 text-sm text-slate-400">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {getWordCountRange(task.level)}{" "}
              kelime
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
        <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-colors shadow-md shadow-emerald-100">
          Başla
        </button>
      </div>
    </motion.div>
  );
}
