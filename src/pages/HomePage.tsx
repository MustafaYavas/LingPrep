import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
import {
  BookOpen,
  PencilLine,
  PenTool,
  ArrowRight,
  Trophy,
  Flame,
  Zap,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";

export function HomePage() {
  const navigate = useNavigate();
  const { currentScore, completedUnits } = useAppSelector(
    (state) => state.progress,
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <FeatureCard
          title="Grammar Alıştırmaları"
          description="Kelime öğrenme ve tekrar"
          icon={PencilLine}
          onClick={() => navigate("/quizzes")}
        />

        <FeatureCard
          title="Okuma Alıştırmaları"
          description="Uzun metinler ve anlama soruları"
          icon={BookOpen}
          onClick={() => navigate("/reading")}
        />

        <FeatureCard
          title="Dinleme Alıştırmaları"
          description="Sesli metinler ve dinlediğini anlama"
          icon={Headphones}
          onClick={() => navigate("/listening")}
        />

        <FeatureCard
          title="Yazma Alıştırmaları"
          description="Metin yazma ve örnek kıyaslama"
          icon={PenTool}
          onClick={() => navigate("/writing")}
        />
      </div>

      {/* Hero CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-xl shadow-indigo-100"
      >
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Dil Öğrenme Yolculuğunda Pro Seviyeye Geç!
          </h2>
          <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
            Hergün sadece 15 dakika ayırarak kelime dağarcığını genişlet ve
            akademik okuma becerilerini geliştir. Senin için hazırlanmış özel
            müfredatla ilerle.
          </p>
          <button
            onClick={() => navigate("/quizzes")}
            className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Hemen Başla <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Mini Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl mb-3">
            <Trophy className="w-6 h-6" />
          </div>
          <p className="text-2xl font-black text-slate-800">{currentScore}</p>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            Toplam Puan
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl mb-3">
            <Flame className="w-6 h-6" />
          </div>
          <p className="text-2xl font-black text-slate-800">
            {completedUnits.length}
          </p>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            Tamamlanan
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl mb-3">
            <Zap className="w-6 h-6" />
          </div>
          <p className="text-2xl font-black text-slate-800">
            {completedUnits.length * 5}
          </p>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            Öğrenilen Kelime
          </p>
        </div>
      </div>
    </div>
  );
}
