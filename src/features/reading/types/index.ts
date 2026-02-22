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

export interface ReadingState {
  units: ReadingUnit[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
