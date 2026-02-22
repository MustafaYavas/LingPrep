// React import is not needed with modern JSX in Vite
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, PencilLine } from "lucide-react";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Feature Cards */}
      <div className="flex items-center gap-4">
        <div className="grid grid-cols-1 gap-6 mb-12 w-fit">
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate("/quizzes")}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4 cursor-pointer hover:border-indigo-200 transition-colors group"
          >
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <PencilLine className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Kelime Alıştırmaları
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Kelime öğrenme ve tekrar et
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            onClick={() => navigate("/reading")}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4 cursor-pointer hover:border-indigo-200 transition-colors group"
          >
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Okuma Alıştırmaları
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Uzun metinler ve anlama soruları
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
