import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchReadingUnits } from "@/features/reading";
import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Clock, FileText } from "lucide-react";

export function ReadingPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { units, status, error } = useAppSelector((state) => state.reading);
  const { completedUnits } = useAppSelector((state) => state.progress);

  useEffect(() => {
    dispatch(fetchReadingUnits());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Hata: {error}</p>
        <button
          onClick={() => dispatch(fetchReadingUnits())}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg"
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
          <BookOpen className="mr-4 text-indigo-600 w-10 h-10" /> Reading
          Alıştırmaları
        </h2>
        <p className="text-lg text-slate-500">
          Okuma kapasiteni ve kelime bilgini geliştirmek için özenle seçilmiş
          A1, A2, B1, B2 ve C1 düzeyinde metinler.
        </p>
      </header>

      {/* A1 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
          A1 Başlangıç Seviyesi
        </h3>
        <div className="grid gap-6">
          {units
            .filter((u) => u.unit_id <= 3)
            .map((unit) => (
              <ReadingUnitCard
                key={unit.unit_id}
                unit={unit}
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
          {units
            .filter((u) => u.unit_id >= 4 && u.unit_id <= 6)
            .map((unit) => (
              <ReadingUnitCard
                key={unit.unit_id}
                unit={unit}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>
      {/* B1 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
          B1 Orta Üstü Seviye
        </h3>
        <div className="grid gap-6">
          {units
            .filter((u) => u.unit_id >= 7 && u.unit_id <= 9)
            .map((unit) => (
              <ReadingUnitCard
                key={unit.unit_id}
                unit={unit}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>
      {/* B2 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
          B2 İleri Seviye Hazırlık
        </h3>
        <div className="grid gap-6">
          {units
            .filter((u) => u.unit_id >= 10 && u.unit_id <= 12)
            .map((unit) => (
              <ReadingUnitCard
                key={unit.unit_id}
                unit={unit}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>
      {/* C1 Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-slate-600 rounded-full mr-3"></span>
          C1 Akademik ve İleri Seviye
        </h3>
        <div className="grid gap-6">
          {units
            .filter((u) => u.unit_id >= 13 && u.unit_id <= 15)
            .map((unit) => (
              <ReadingUnitCard
                key={unit.unit_id}
                unit={unit}
                completedUnits={completedUnits}
                navigate={navigate}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

function ReadingUnitCard({
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
