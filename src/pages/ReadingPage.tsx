import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchReadingUnits } from "@/features/reading";
import { BookOpen, ArrowLeft } from "lucide-react";
import { getLevelStyles } from "@/utils/levelUtils";
import { ReadingUnitCard } from "@/features/reading/components/ReadingUnitCard";

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
          className="flex items-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
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
          <span
            className={`w-2 h-8 ${getLevelStyles("A1").indicator} rounded-full mr-3`}
          ></span>
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
          <span
            className={`w-2 h-8 ${getLevelStyles("A2").indicator} rounded-full mr-3`}
          ></span>
          A2 Orta Seviye
        </h3>
        <div className="grid gap-6">
          {units
            .filter((u) => u.unit_id >= 4 && u.unit_id <= 6)
            .map((unit, index) => (
              <ReadingUnitCard
                key={index}
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
          <span
            className={`w-2 h-8 ${getLevelStyles("B1").indicator} rounded-full mr-3`}
          ></span>
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
          <span
            className={`w-2 h-8 ${getLevelStyles("B2").indicator} rounded-full mr-3`}
          ></span>
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
          <span
            className={`w-2 h-8 ${getLevelStyles("C1").indicator} rounded-full mr-3`}
          ></span>
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
