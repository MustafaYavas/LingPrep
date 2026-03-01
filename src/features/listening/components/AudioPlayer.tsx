import { useState, useEffect, useCallback } from "react";
import { Play, Pause, Square, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  text: string;
}

export function AudioPlayer({ text }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null,
  );

  useEffect(() => {
    const synth = window.speechSynthesis;
    // Replace [pause] markers with commas to induce a small pause in speech synthesis
    const cleanText = text.replace(/\[pause\]/gi, ",");
    const newUtterance = new SpeechSynthesisUtterance(cleanText);

    newUtterance.lang = "en-US";
    newUtterance.rate = 0.8; // Slightly slower for A1 level learners

    newUtterance.onend = () => {
      setIsPlaying(false);
    };

    setUtterance(newUtterance);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = useCallback(() => {
    if (!utterance) return;
    const synth = window.speechSynthesis;

    if (synth.paused) {
      synth.resume();
    } else {
      synth.cancel(); // Cancel any ongoing speech before starting new
      synth.speak(utterance);
    }
    setIsPlaying(true);
  }, [utterance]);

  const handlePause = useCallback(() => {
    window.speechSynthesis.pause();
    setIsPlaying(false);
  }, []);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-xl text-primary">
            <Volume2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Audio Track</h3>
            <p className="text-sm text-slate-500">Listen carefully</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={isPlaying ? handlePause : handlePlay}
          className="flex-1 py-3 px-4 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" /> Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5" /> Play
            </>
          )}
        </button>
        <button
          onClick={handleStop}
          className="p-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          title="Stop"
        >
          <Square className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
