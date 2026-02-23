import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserProgressState } from "../types";

const initialState: UserProgressState = {
  completedUnits: [],
  completedTests: {},
  testScores: {},
  currentScore: 0,
  totalCorrectAnswers: 0,
  totalWrongAnswers: 0,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    completeTest: (
      state,
      action: PayloadAction<{
        unitId: number;
        testId: string;
        correctCount: number;
        wrongCount: number;
      }>,
    ) => {
      const { unitId, testId, correctCount, wrongCount } = action.payload;

      if (!state.testScores) state.testScores = {};
      if (!state.testScores[unitId]) state.testScores[unitId] = {};

      const previousBest = state.testScores[unitId][testId] || 0;
      const improvement = Math.max(0, correctCount - previousBest);

      // Update global stats based on improvement
      state.totalCorrectAnswers += improvement;
      state.currentScore += improvement * 10;

      // Always add wrong answers to cumulative stats?
      // Actually, if it's a "best attempt" system, maybe we should only add wrong answers once?
      // But usually 'total' metrics are cumulative across all attempts.
      // For now, let's keep wrong answers cumulative per the previous logic,
      // but only incrementing the score for new achievements.
      state.totalWrongAnswers += wrongCount;

      if (!state.completedTests[unitId]) {
        state.completedTests[unitId] = [];
      }

      if (!state.completedTests[unitId].includes(testId)) {
        state.completedTests[unitId].push(testId);
      }

      // Keep the best score
      state.testScores[unitId][testId] = Math.max(previousBest, correctCount);

      // If all 3 tests are completed, evaluate unit progress
      if (state.completedTests[unitId].length >= 3) {
        const total = Object.values(state.testScores[unitId]).reduce(
          (a, b) => a + b,
          0,
        );

        if (total >= 12) {
          // 75% of 15 is 11.25, so >= 12 is passing
          if (!state.completedUnits.includes(unitId)) {
            state.completedUnits.push(unitId);
          }
        } else {
          // Failed! Reset progress for this unit if not already completed in the past
          if (!state.completedUnits.includes(unitId)) {
            state.completedTests[unitId] = [];
            state.testScores[unitId] = {};
          }
        }
      }
    },
    resetProgress: () => {
      return initialState;
    },
  },
});

export const { completeTest, resetProgress } = progressSlice.actions;

export default progressSlice.reducer;
