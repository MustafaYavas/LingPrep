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
    addCorrectAnswer: (state) => {
      state.totalCorrectAnswers += 1;
      state.currentScore += 10;
    },
    addWrongAnswer: (state) => {
      state.totalWrongAnswers += 1;
    },
    completeTest: (
      state,
      action: PayloadAction<{
        unitId: number;
        testId: string;
        correctCount: number;
      }>,
    ) => {
      const { unitId, testId, correctCount } = action.payload;
      if (!state.completedTests[unitId]) {
        state.completedTests[unitId] = [];
      }
      if (!state.testScores) state.testScores = {};
      if (!state.testScores[unitId]) state.testScores[unitId] = {};

      if (!state.completedTests[unitId].includes(testId)) {
        state.completedTests[unitId].push(testId);
      }

      state.testScores[unitId][testId] = correctCount;

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

export const { addCorrectAnswer, addWrongAnswer, completeTest, resetProgress } =
  progressSlice.actions;

export default progressSlice.reducer;
