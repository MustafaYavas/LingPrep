export interface QuizOption {
  // if available
}

export type QuestionType = "multiple_choice" | "fill_in_blank" | "true_false";
export type Difficulty = "easy" | "medium" | "hard";

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  question_text: string;
  options?: string[];
  correct_answer: string;
  explanation: string;
}

export interface QuizTest {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizUnit {
  unit_id: number;
  unit_title: string;
  tests: QuizTest[];
}
