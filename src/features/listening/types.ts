export interface ListeningQuestion {
  question: string;
  options: string[];
  correct_answer: string;
}

export interface ListeningTask {
  id: string;
  unit_id: number;
  unit_title: string;
  audio_script: string;
  listening_task: {
    type: string;
    questions: ListeningQuestion[];
  };
  focus_sounds: string[];
  level: string;
}

export interface ListeningState {
  tasks: ListeningTask[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
