import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { writingService } from "@/features/writing";
import { completeTest } from "@/features/progress";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  PenTool,
  ChevronRight,
  Lightbulb,
  Award,
  Target,
  Eye,
  Send,
} from "lucide-react";
import type { WritingTask } from "@/features/writing/types";
import { getLevelStyles } from "@/utils/levelUtils";
import { getWordCountRange } from "@/utils/utils";

export function WritingTaskPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<WritingTask | null>(null);
  const [loading, setLoading] = useState(true);
  const [userText, setUserText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (unitId) {
      const parsedUnitId = parseInt(unitId);
      const level =
        parsedUnitId <= 6
          ? "A1"
          : parsedUnitId <= 12
            ? "A2"
            : parsedUnitId <= 18
              ? "B1"
              : parsedUnitId <= 24
                ? "B2"
                : "C1";
      writingService.getTask(level, parsedUnitId).then((data) => {
        setTask(data);
        setLoading(false);
      });
    }
  }, [unitId]);

  const minRequiredStr = task
    ? getWordCountRange(task.level).split("-")[0]
    : "10";
  const minRequired = parseInt(minRequiredStr, 10);

  const handleSubmit = () => {
    if (userText.trim().length === 0 || wordCount < minRequired) return;
    setIsSubmitted(true);

    // Save progress with a special ID for writing tasks (e.g., unitId + 200)
    dispatch(
      completeTest({
        unitId: parseInt(unitId!) + 200,
        testId: "writing",
        correctCount: 1, // Writing is counted as 1 point when completed
        wrongCount: 0,
      }),
    );
  };

  const wordCount =
    userText.trim() === "" ? 0 : userText.trim().split(/\s+/).length;
  const isEnoughWords = wordCount >= minRequired;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!task) return <div className="text-center py-12">Görev bulunamadı.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate("/writing")}
          className="flex items-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Yazma Listesi
        </button>
        <div className="flex items-center space-x-2">
          <PenTool className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-slate-700">{task.task_title}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="editor"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Task Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <div
                className={`flex items-center space-x-3 mb-6 p-3 ${getLevelStyles(task.level).bg} rounded-2xl w-fit`}
              >
                <Lightbulb
                  className={`w-5 h-5 ${getLevelStyles(task.level).text}`}
                />
                <span
                  className={`text-sm font-bold ${getLevelStyles(task.level).text}`}
                >
                  {task.level} Writing
                </span>
              </div>

              <h1 className="text-2xl font-black text-slate-800 mb-4">
                {task.task_title}
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100 italic">
                "{task.instruction}"
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center">
                    <Target className="w-4 h-4 mr-2" /> Hedef Yapılar
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {task.target_structures.map((s) => (
                      <span
                        key={s}
                        className={`px-3 py-1 ${getLevelStyles(task.level).badge} text-xs font-bold rounded-lg border border-blue-100 uppercase`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Değerlendirme
                    Kriterleri
                  </h4>
                  <ul className="text-sm text-slate-500 space-y-1 mb-4">
                    {(
                      task.rhetorical_check ||
                      task.evaluation_criteria ||
                      task.grading_keys ||
                      task.grading_criteria ||
                      []
                    ).map((c, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 min-w-[6px]"></span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  {(task.academic_vocabulary ||
                    task.sophisticated_vocabulary) &&
                    (task.academic_vocabulary || task.sophisticated_vocabulary)!
                      .length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center">
                          <Eye className="w-4 h-4 mr-2" /> Hedef Kelimeler
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(task.academic_vocabulary ||
                            task.sophisticated_vocabulary)!.map((vocab) => (
                            <span
                              key={vocab}
                              className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-lg border border-purple-100 uppercase"
                            >
                              {vocab}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>

            {/* Input Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative">
              <textarea
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                placeholder="Buraya yazmaya başla..."
                className={`w-full min-h-[300px] p-6 text-xl text-slate-700 bg-slate-50 rounded-2xl border-2 border-transparent ${getLevelStyles(task.level).focusBorder} focus:bg-white outline-none transition-all resize-none`}
              />
              <div className="absolute bottom-12 right-12 flex items-center space-x-4">
                <div className="flex flex-col items-end">
                  <span
                    className={`text-sm font-bold ${
                      isEnoughWords ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {wordCount} / {minRequired} kelime
                  </span>
                  {!isEnoughWords && (
                    <span
                      className={`text-xs ${getLevelStyles(task.level).text} mt-1`}
                    >
                      En az {minRequired} kelime yazmalısın
                    </span>
                  )}
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!isEnoughWords}
                  className={`${getLevelStyles(task.level).button} disabled:opacity-50 disabled:bg-slate-300 text-white p-4 rounded-2xl shadow-lg transition-all group cursor-pointer`}
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-2xl shadow-emerald-100 border border-slate-100">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-black text-slate-800 mb-2">
                Tebrikler!
              </h2>
              <p className="text-slate-500">
                Yazma alıştırmasını tamamladın. Şimdi kendi metnin ile örnek
                metni karşılaştır.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* User Text */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-400 uppercase tracking-widest text-sm flex items-center px-4">
                  <PenTool className="w-4 h-4 mr-2" /> Senin Metnin
                </h4>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[250px] text-lg text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {userText}
                </div>
              </div>

              {/* Model Text */}
              <div className="space-y-4">
                <h4 className="font-bold text-emerald-500 uppercase tracking-widest text-sm flex items-center px-4">
                  <Eye className="w-4 h-4 mr-2" /> Örnek Metin ({task.level})
                </h4>
                <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 shadow-sm min-h-[250px] text-lg text-emerald-900 leading-relaxed whitespace-pre-wrap font-medium">
                  {task.model_answer}
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/writing")}
              className="w-full py-5 bg-slate-800 text-white rounded-2xl font-black text-xl hover:bg-slate-900 transition-all shadow-lg flex items-center justify-center group cursor-pointer"
            >
              Yazma Listesine Dön{" "}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
