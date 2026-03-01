import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { listeningService, AudioPlayer } from "@/features/listening";
import { completeTest } from "@/features/progress";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Headphones,
  ChevronRight,
  Award,
} from "lucide-react";
import type { ListeningTask } from "@/features/listening/types";
import {
  getLevelBgColorListening,
  getLevelTextColorListening,
} from "@/utils/utils";

export function ListeningTaskPage() {
  const { level, unitId } = useParams<{ level: string; unitId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<ListeningTask | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Make sure speech synthesis stops when unmounting
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (level && unitId) {
      listeningService.getTask(level, parseInt(unitId)).then((data) => {
        setTask(data);
        setLoading(false);
      });
    }
  }, [level, unitId]);

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (
      task &&
      option ===
        task.listening_task.questions[currentQuestionIndex].correct_answer
    ) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (!task) return;

    if (currentQuestionIndex < task.listening_task.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      // Save progress with a special ID for listening units (e.g., unitId + 200)
      const totalQuestions = task.listening_task.questions.length;
      const wrongCount = totalQuestions - score;
      dispatch(
        completeTest({
          unitId: parseInt(unitId!) + 200,
          testId: "listening",
          correctCount: score,
          wrongCount,
        }),
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!task) return <div className="text-center py-12">Ünite bulunamadı.</div>;

  const currentQuestion = task.listening_task.questions[currentQuestionIndex];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate("/listening")}
          className="flex items-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Dinleme Listesi
        </button>
        <div className="flex items-center space-x-2">
          <Headphones className="w-5 h-5 text-blue-500" />
          <span className="font-bold text-slate-700">{task.unit_title}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="exercise"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-6"
          >
            <div
              className={`flex items-center space-x-3 mb-2 p-3 ${getLevelBgColorListening(level!)} rounded-2xl w-fit`}
            >
              <span
                className={`text-sm font-bold ${getLevelTextColorListening(level!)}`}
              >
                {level} Listening
              </span>
            </div>

            <h1 className="text-3xl font-black text-slate-800 mb-8 leading-tight">
              {task.unit_title}
            </h1>

            {/* Audio Player */}
            <AudioPlayer text={task.audio_script} />

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mt-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-blue-500">
                  Soru {currentQuestionIndex + 1} /{" "}
                  {task.listening_task.questions.length}
                </span>
                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {task.listening_task.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                {currentQuestion.question}
              </h3>

              <div className="grid gap-4">
                {currentQuestion.options.map((option) => {
                  const isCorrect = option === currentQuestion.correct_answer;
                  const isSelected = option === selectedOption;

                  let bgClass =
                    "bg-white border-slate-200 hover:border-blue-300";
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
                  task.listening_task.questions.length - 1
                    ? "Sonraki Soru"
                    : "Sonucu Gör"}
                  <ChevronRight className="ml-2" />
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[2.5rem] p-12 text-center shadow-2xl shadow-blue-100 border border-slate-100"
          >
            <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12">
              <Award className="w-14 h-14" />
            </div>
            <h2 className="text-4xl font-black text-slate-800 mb-4">
              Harika İş!
            </h2>
            <p className="text-xl text-slate-500 mb-8">
              Listening:{" "}
              <span className="text-blue-600 font-black">
                {task.unit_title}
              </span>{" "}
              ünitesini tamamladın.
            </p>

            <div className="bg-slate-50 rounded-3xl p-8 mb-10">
              <span className="text-slate-400 font-bold text-sm block mb-2 uppercase tracking-widest">
                Skorun
              </span>
              <div className="text-6xl font-black text-slate-800">
                {score}{" "}
                <span className="text-2xl text-slate-300">
                  / {task.listening_task.questions.length}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate("/listening")}
              className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 cursor-pointer"
            >
              Dinleme Listesine Dön
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
