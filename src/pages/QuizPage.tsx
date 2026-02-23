import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchQuizUnit,
  startTest,
  nextQuestion,
  resetQuiz,
  QuestionCard,
} from "@/features/quiz";
import { completeTest } from "@/features/progress";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";

export function QuizPage() {
  const { unitId, testId } = useParams<{ unitId: string; testId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentUnit, currentQuestionIndex, status, isFinished } =
    useAppSelector((state) => state.quiz);

  const [feedback, setFeedback] = React.useState<"correct" | "wrong" | null>(
    null,
  );
  const [correctCount, setCorrectCount] = React.useState(0);
  const [wrongCount, setWrongCount] = React.useState(0);

  useEffect(() => {
    setCorrectCount(0);
    setWrongCount(0);
  }, [testId]);

  useEffect(() => {
    if (unitId) {
      dispatch(fetchQuizUnit(parseInt(unitId, 10)));
    }
    return () => {
      dispatch(resetQuiz());
    };
  }, [unitId, dispatch]);

  useEffect(() => {
    if (status === "succeeded" && testId) {
      dispatch(startTest(testId));
    }
  }, [status, testId, dispatch]);

  const handleAnswer = (answer: string) => {
    if (!currentUnit || feedback) return;

    const currentTest = currentUnit.tests.find((t) => t.id === testId);
    if (!currentTest) return;
    const currentQuestion = currentTest.questions[currentQuestionIndex];

    // Normalize string answers for comparison
    const isCorrect =
      answer.toLowerCase() === currentQuestion.correct_answer.toLowerCase();

    setFeedback(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }

    setTimeout(() => {
      dispatch(nextQuestion(testId));
      setFeedback(null);
    }, 2000); // Wait 2 seconds before next question
  };

  const isUnitAlreadyCompleted = useAppSelector((state) =>
    state.progress.completedUnits.includes(parseInt(unitId || "0", 10)),
  );
  const testScoresForUnit = useAppSelector(
    (state) => state.progress.testScores?.[parseInt(unitId || "0", 10)],
  );
  const completedTestsForUnit = useAppSelector(
    (state) => state.progress.completedTests?.[parseInt(unitId || "0", 10)],
  );

  useEffect(() => {
    if (testId === "t2" && !completedTestsForUnit?.includes("t1")) {
      navigate("/");
    }
    if (testId === "t3" && !completedTestsForUnit?.includes("t2")) {
      navigate("/");
    }
  }, [testId, completedTestsForUnit, navigate]);

  const t1Score = testScoresForUnit?.["t1"] || 0;
  const t2Score = testScoresForUnit?.["t2"] || 0;

  const scoreRef = React.useRef(0);
  if (!isFinished && testId === "t3") {
    scoreRef.current = t1Score + t2Score + correctCount;
  }
  const totalCorrectForUnit = testId === "t3" ? scoreRef.current : 0;
  const isUnitPass = totalCorrectForUnit >= 12;

  useEffect(() => {
    if (isFinished && unitId && testId) {
      dispatch(
        completeTest({
          unitId: parseInt(unitId, 10),
          testId,
          correctCount,
          wrongCount,
        }),
      );
    }
  }, [isFinished, unitId, testId, dispatch, correctCount, wrongCount]);

  if (status === "loading") {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-slate-200 border-t-primary rounded-full"
        />
      </div>
    );
  }

  if (isFinished) {
    if (testId === "t3") {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto mt-20 p-10 bg-white rounded-3xl shadow-xl shadow-green-100 text-center"
        >
          {isUnitPass || isUnitAlreadyCompleted ? (
            <>
              <CheckCircle2 className="w-24 h-24 mx-auto text-green-500 mb-6" />
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Tebrikler!
              </h2>
              <p className="text-slate-600 mb-8">
                Bu üniteyi başarıyla tamamladınız! Başarı oranınız: %
                {Math.round((totalCorrectForUnit / 15) * 100)} (
                {totalCorrectForUnit}/15)
              </p>
            </>
          ) : (
            <>
              <XCircle className="w-24 h-24 mx-auto text-red-500 mb-6" />
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Ünite Tekrarı Gerekiyor
              </h2>
              <p className="text-slate-600 mb-8">
                Başarı oranınız %75'in altında kaldı (%
                {Math.round((totalCorrectForUnit / 15) * 100)} -{" "}
                {totalCorrectForUnit}/15). Ünite ilerlemeniz sıfırlandı, lütfen
                üniteyi tekrar edin.
              </p>
            </>
          )}
          <button
            onClick={() => navigate("/quizzes")}
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-colors w-full"
          >
            Ana Sayfaya Dön
          </button>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto mt-20 p-10 bg-white rounded-3xl shadow-xl shadow-green-100 text-center"
      >
        <CheckCircle2 className="w-24 h-24 mx-auto text-green-500 mb-6" />
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Test Tamamlandı!
        </h2>
        <p className="text-slate-600 mb-8">
          Bu testi başarıyla bitirdiniz. Skorunuz: {correctCount}/5
        </p>
        <button
          onClick={() => navigate("/quizzes")}
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-colors w-full"
        >
          Ana Sayfaya Dön
        </button>
      </motion.div>
    );
  }

  const currentTest = currentUnit?.tests.find((t) => t.id === testId);
  const currentQuestion = currentTest?.questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto h-[80vh] flex flex-col relative px-4">
      <div className="flex items-center justify-between mb-8 mt-4">
        <button
          onClick={() => navigate("/quizzes")}
          className="p-2 hover:bg-slate-200 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-slate-500" />
        </button>
        <div className="text-slate-500 font-medium">
          Soru {currentQuestionIndex + 1} / {currentTest?.questions.length || 0}
        </div>
        <div className="w-10"></div> {/* Spacer for balancing */}
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          {currentQuestion && !feedback && (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          )}

          {feedback && (
            <motion.div
              key="feedback"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className={`absolute flex flex-col items-center justify-center p-8 rounded-3xl text-white font-bold text-2xl shadow-2xl ${feedback === "correct" ? "bg-green-500" : "bg-red-500"}`}
            >
              {feedback === "correct" ? (
                <CheckCircle2 className="w-20 h-20 mb-4" />
              ) : (
                <XCircle className="w-20 h-20 mb-4" />
              )}
              {feedback === "correct"
                ? "Harika! Doğru Cevap"
                : "Maalesef Yanlış"}

              {/* Optional: Show explanation if wrong - to keep it simple we just show it for both or neither. */}
              <div className="mt-4 text-base font-medium opacity-90 text-center max-w-sm">
                {currentQuestion?.explanation}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
