import { motion } from "framer-motion";
import type { QuizQuestion } from "../types";

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (answer: string) => void;
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  // Common animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } },
  };

  const renderOptions = () => {
    if (question.type === "multiple_choice" && question.options) {
      return (
        <div className="space-y-3 mt-6">
          {question.options.map((opt, idx) => (
            <motion.button
              key={idx}
              whileHover={{
                scale: 1.02,
                backgroundColor: "#eff6ff",
                borderColor: "#3b82f6",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-left p-4 rounded-xl border-2 border-slate-200 bg-white transition-colors duration-200 font-medium text-slate-700"
              onClick={() => onAnswer(opt)}
            >
              {opt}
            </motion.button>
          ))}
        </div>
      );
    }

    if (question.type === "true_false") {
      return (
        <div className="grid grid-cols-2 gap-4 mt-6">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f0fdf4",
              borderColor: "#22c55e",
              color: "#166534",
            }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-xl border-2 border-slate-200 bg-white font-bold text-lg text-slate-700"
            onClick={() => onAnswer("true")}
          >
            Doğru
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fef2f2",
              borderColor: "#ef4444",
              color: "#991b1b",
            }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-xl border-2 border-slate-200 bg-white font-bold text-lg text-slate-700"
            onClick={() => onAnswer("false")}
          >
            Yanlış
          </motion.button>
        </div>
      );
    }

    if (question.type === "fill_in_blank") {
      // We can just render multiple options if we generate them, but currently fill in blank might need input or we can provide the correct answer as a button for simplicity in MVP.
      // The mock data doesn't provide options for fill_in_blank. Let's provide a text input.
      return (
        <form
          className="mt-6 flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const input = form.elements.namedItem("answer") as HTMLInputElement;
            if (input.value.trim()) onAnswer(input.value.trim());
          }}
        >
          <input
            type="text"
            name="answer"
            placeholder="Cevabınızı yazın..."
            className="w-full p-4 text-center text-xl rounded-xl border-2 border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
            autoFocus
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-6 bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
          >
            Cevapla
          </motion.button>
        </form>
      );
    }

    return null;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={question.id} // Important for Framer Motion AnimatePresence
      className="max-w-2xl w-full mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50"
    >
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          {question.difficulty}
        </span>
        <span className="text-sm font-semibold text-slate-400 bg-slate-100 py-1 px-3 rounded-full">
          Gramer / Kelime
        </span>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 text-center leading-relaxed">
        {question.question_text}
      </h2>

      {renderOptions()}
    </motion.div>
  );
}
