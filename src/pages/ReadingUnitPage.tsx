import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { readingService } from "@/features/reading";
import { completeTest } from "@/features/progress";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  BookOpen,
  ChevronRight,
  Lightbulb,
  Award,
  BookMarked,
} from "lucide-react";
import type { ReadingUnit } from "@/features/reading/types";
import {
  getLevel,
  getLevelBgColor,
  getLevelBgDarkColor,
  getLevelBgHoverColor,
  getLevelFirstLetterColor,
  getLevelTextColor,
} from "@/utils/utils";

export function ReadingUnitPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [unit, setUnit] = useState<ReadingUnit | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"reading" | "questions">("reading");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (unitId) {
      readingService.getUnit(parseInt(unitId)).then((data) => {
        setUnit(data);
        setLoading(false);
      });
    }
  }, [unitId]);

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (
      unit &&
      option ===
        unit.comprehension_questions[currentQuestionIndex].correct_answer
    ) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (!unit) return;

    if (currentQuestionIndex < unit.comprehension_questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      // Save progress with a special ID for reading units (e.g., unitId + 100)
      const totalQuestions = unit.comprehension_questions.length;
      const wrongCount = totalQuestions - score;
      dispatch(
        completeTest({
          unitId: parseInt(unitId!) + 100,
          testId: "reading",
          correctCount: score,
          wrongCount,
        }),
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!unit) return <div className="text-center py-12">Ünite bulunamadı.</div>;

  const currentQuestion = unit.comprehension_questions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate("/reading")}
          className="flex items-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Okuma Listesi
        </button>
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-indigo-500" />
          <span className="font-bold text-slate-700">{unit.title}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          viewMode === "reading" ? (
            <motion.div
              key="reading"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div
                className={`flex items-center space-x-3 mb-6 p-3 ${getLevelBgColor(unit.unit_id)} rounded-2xl w-fit`}
              >
                <Lightbulb
                  className={`w-5 h-5 ${getLevelTextColor(unit.unit_id)}`}
                />
                <span
                  className={`text-sm font-bold ${getLevelTextColor(unit.unit_id)}`}
                >
                  {getLevel(unit.unit_id)} Reading
                </span>
              </div>

              <h1 className="text-3xl font-black text-slate-800 mb-8 leading-tight">
                {unit.title}
              </h1>

              <div className="space-y-6 text-xl leading-relaxed text-slate-700">
                {unit.text_paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className={`first-letter:text-3xl ${getLevelFirstLetterColor(unit.unit_id)} first-letter:font-bold first-letter:mr-1`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                <span className="text-sm font-bold text-slate-400 mr-2 flex items-center h-8">
                  <BookMarked className="w-4 h-4 mr-1" /> Kelime Odağı:
                </span>
                {unit.vocabulary_focus.map((vocab) => (
                  <span
                    key={vocab}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-bold rounded-lg hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-help"
                  >
                    {vocab}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setViewMode("questions")}
                className={`w-full mt-10 py-5 ${getLevelBgDarkColor(unit.unit_id)} text-white rounded-2xl font-black text-xl cursor-pointer ${getLevelBgHoverColor(unit.unit_id)} transition-all shadow-lg shadow-indigo-200 flex items-center justify-center group`}
              >
                Sorulara Geç{" "}
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Progress Tracker */}
              <div className="flex items-center space-x-2 mb-4">
                {unit.comprehension_questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                      i < currentQuestionIndex
                        ? "bg-green-500"
                        : i === currentQuestionIndex
                          ? "bg-indigo-500"
                          : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <span className="text-sm font-bold text-indigo-500 mb-2 block">
                  Soru {currentQuestionIndex + 1} /{" "}
                  {unit.comprehension_questions.length}
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-8">
                  {currentQuestion.question}
                </h3>

                <div className="grid gap-4">
                  {currentQuestion.options.map((option) => {
                    const isCorrect = option === currentQuestion.correct_answer;
                    const isSelected = option === selectedOption;

                    let bgClass =
                      "bg-white border-slate-200 hover:border-indigo-300";
                    if (isAnswered) {
                      if (isCorrect)
                        bgClass =
                          "bg-green-50 border-green-500 text-green-700 ring-2 ring-green-500/20";
                      else if (isSelected)
                        bgClass =
                          "bg-red-50 border-red-500 text-red-700 ring-2 ring-red-500/20";
                      else bgClass = "bg-slate-50 border-slate-100 opacity-50";
                    }

                    return (
                      <button
                        key={option}
                        disabled={isAnswered}
                        onClick={() => handleOptionSelect(option)}
                        className={`p-5 rounded-2xl border-2 text-left font-bold text-lg transition-all flex items-center justify-between cursor-pointer ${bgClass}`}
                      >
                        {option}
                        {isAnswered && isCorrect && (
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleNext}
                    className="w-full mt-8 py-5 bg-slate-800 text-white rounded-2xl font-black text-xl hover:bg-slate-900 transition-all flex items-center justify-center cursor-pointer"
                  >
                    {currentQuestionIndex <
                    unit.comprehension_questions.length - 1
                      ? "Sonraki Soru"
                      : "Sonucu Gör"}
                    <ChevronRight className="ml-2" />
                  </motion.button>
                )}

                <button
                  onClick={() => setViewMode("reading")}
                  className="w-full mt-4 text-slate-400 font-bold hover:text-indigo-500 transition-colors cursor-pointer"
                >
                  Metne Tekrar Bak
                </button>
              </div>
            </motion.div>
          )
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[2.5rem] p-12 text-center shadow-2xl shadow-indigo-100 border border-slate-100"
          >
            <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12">
              <Award className="w-14 h-14" />
            </div>
            <h2 className="text-4xl font-black text-slate-800 mb-4">
              Harika İş!
            </h2>
            <p className="text-xl text-slate-500 mb-8">
              A1 Reading:{" "}
              <span className="text-indigo-600 font-black">{unit.title}</span>{" "}
              ünitesini tamamladın.
            </p>

            <div className="bg-slate-50 rounded-3xl p-8 mb-10">
              <span className="text-slate-400 font-bold text-sm block mb-2 uppercase tracking-widest">
                Skorun
              </span>
              <div className="text-6xl font-black text-slate-800">
                {score}{" "}
                <span className="text-2xl text-slate-300">
                  / {unit.comprehension_questions.length}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate("/reading")}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 cursor-pointer"
            >
              Okuma Listesine Dön
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
