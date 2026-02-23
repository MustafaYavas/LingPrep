export interface UserProgressState {
  completedUnits: number[]; // Array of completed unit IDs
  completedTests: Record<number, string[]>; // Map of unitId to array of completed test IDs (e.g. { 1: ['t1', 't2'] })
  testScores: Record<number, Record<string, number>>; // { unitId: { testId: score } }
  currentScore: number;
  totalCorrectAnswers: number;
  totalWrongAnswers: number;
  lastCompletedLevel?: string | null;
}
