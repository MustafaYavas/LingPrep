export interface QuizOption {
  text: string;
  is_correct: boolean;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  explanation?: string;
}

export interface QuizUnit {
  unit_id: number;
  unit_title: string;
  tests: {
    id: string;
    title: string;
    questions: {
      id: string;
      type: string;
      difficulty: string;
      question_text: string;
      options?: string[];
      correct_answer: string;
      explanation: string;
    }[];
  }[];
}

export interface ReadingQuestion {
  question: string;
  options: string[];
  correct_answer: string;
  type?: "inference_simple" | "literal";
}

export interface ReadingUnit {
  unit_id: number;
  theme: string;
  word_count: number;
  title: string;
  text_paragraphs: string[];
  vocabulary_focus: string[];
  comprehension_questions: ReadingQuestion[];
}

export interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
  measurementId?: string | undefined;
}
export interface WritingTask {
  unit_id: number;
  task_title: string;
  instruction: string;
  target_structures: string[];
  model_answer: string;
  grading_criteria?: string[];
  grading_keys?: string[];
  academic_vocabulary?: string[];
  evaluation_criteria?: string[];
  sophisticated_vocabulary?: string[];
  rhetorical_check?: string[];
}
