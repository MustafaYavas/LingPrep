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
  level: string;
}

export interface WritingState {
  tasks: WritingTask[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
