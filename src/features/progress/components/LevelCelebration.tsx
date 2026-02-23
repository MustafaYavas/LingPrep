import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, PartyPopper, Sparkles } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearLevelCelebration } from "../store/progressSlice";

export const LevelCelebration: React.FC = () => {
  const dispatch = useAppDispatch();
  const lastCompletedLevel = useAppSelector(
    (state) => state.progress.lastCompletedLevel,
  );

  if (!lastCompletedLevel) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
      >
        {/* Particle Effects (Mock Confetti) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                top: "-10%",
                left: `${Math.random() * 100}%`,
                rotate: 0,
              }}
              animate={{
                top: "110%",
                left: `${Math.random() * 100}%`,
                rotate: 360,
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
              className="absolute text-yellow-400"
            >
              <Star size={16 + Math.random() * 20} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.8, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          className="relative max-w-lg w-full bg-white rounded-[2.5rem] p-8 md:p-12 text-center shadow-2xl border-4 border-yellow-400/30 overflow-hidden"
        >
          {/* Background Highlight */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              delay: 0.2,
            }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-40"
              />
              <div className="relative bg-gradient-to-br from-yellow-300 to-yellow-500 p-6 rounded-full shadow-lg border-4 border-white">
                <Trophy size={64} className="text-white drop-shadow-md" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 text-primary"
              >
                <Sparkles size={32} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary mb-2">
              Seviye Atladınız!
            </h2>
            <h1 className="text-5xl font-black text-slate-800 mb-6 bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent">
              {lastCompletedLevel} Tamamlandı
            </h1>

            <div className="flex items-center justify-center gap-2 mb-8 text-slate-600 font-medium">
              <PartyPopper size={20} className="text-pink-500" />
              <span>Harika bir ilerleme! Bir sonraki seviyeye hazırsınız.</span>
              <PartyPopper size={20} className="text-pink-500" />
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => dispatch(clearLevelCelebration())}
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-5 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all text-xl"
              >
                Macera Devam Ediyor
              </motion.button>

              <p className="text-slate-400 text-sm italic">
                Sizinle gurur duyuyoruz!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
