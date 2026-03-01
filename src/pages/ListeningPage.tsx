import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchListeningTasks } from "@/features/listening";
import { Headphones, ArrowLeft } from "lucide-react";
import { ListeningUnitCard } from "@/components/ui/ListeningUnitCard";

export function ListeningPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tasks, status, error } = useAppSelector((state) => state.listening);
  const { completedUnits } = useAppSelector((state) => state.progress);

  useEffect(() => {
    dispatch(fetchListeningTasks());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Hata: {error}</p>
        <button
          onClick={() => dispatch(fetchListeningTasks())}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
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
          <Headphones className="mr-4 text-blue-600 w-10 h-10" /> Listening
          Alıştırmaları
        </h2>
        <p className="text-lg text-slate-500">
          Dinleme becerilerini geliştirmek için hazırlanan sesli metinler ve
          anlama soruları.
        </p>
      </header>

      {/* A1 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
          A1 Başlangıç Seviyesi
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "A1")
            .map((task) => (
              <ListeningUnitCard
                key={task.id || `${task.level}-${task.unit_id}`}
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
          <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
          A2 Orta Seviye
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "A2")
            .map((task) => (
              <ListeningUnitCard
                key={task.id || `${task.level}-${task.unit_id}`}
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
          <span className="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>
          B1 Orta-İleri Seviye
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "B1")
            .map((task) => (
              <ListeningUnitCard
                key={task.id || `${task.level}-${task.unit_id}`}
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
          <span className="w-2 h-8 bg-rose-600 rounded-full mr-3"></span>
          B2 İleri Seviye
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "B2")
            .map((task) => (
              <ListeningUnitCard
                key={task.id || `${task.level}-${task.unit_id}`}
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
          <span className="w-2 h-8 bg-indigo-700 rounded-full mr-3"></span>
          C1 İleri Seviye (Advanced)
        </h3>
        <div className="grid gap-6">
          {tasks
            .filter((t) => t.level === "C1")
            .map((task) => (
              <ListeningUnitCard
                key={task.id || `${task.level}-${task.unit_id}`}
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
