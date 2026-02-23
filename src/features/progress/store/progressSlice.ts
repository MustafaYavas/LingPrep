import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserProgressState } from "../types";

const initialState: UserProgressState = {
  completedUnits: [],
  completedTests: {},
  testScores: {},
  currentScore: 0,
  totalCorrectAnswers: 0,
  totalWrongAnswers: 0,
  lastCompletedLevel: null,
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

            // Check if this was the last unit of a level
            const levelBoundaries: Record<string, number> = {
              A1: 5,
              A2: 11,
              B1: 17,
              B2: 23,
              C1: 29,
            };

            for (const [level, lastUnitId] of Object.entries(levelBoundaries)) {
              if (unitId === lastUnitId) {
                state.lastCompletedLevel = level;
                break;
              }
            }
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
    clearLevelCelebration: (state) => {
      state.lastCompletedLevel = null;
    },
    resetProgress: () => {
      return initialState;
    },
  },
});

export const { completeTest, clearLevelCelebration, resetProgress } =
  progressSlice.actions;

export default progressSlice.reducer;
