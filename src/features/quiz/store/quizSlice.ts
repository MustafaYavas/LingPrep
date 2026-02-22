import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuizUnit } from "../types";
import { fetchQuizUnit } from "../async-thunk/quizThunks";

interface QuizState {
  currentUnit: QuizUnit | null;
  currentTestId: string | null;
  currentQuestionIndex: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  isFinished: boolean;
}

const initialState: QuizState = {
  currentUnit: null,
  currentTestId: null,
  currentQuestionIndex: 0,
  status: "idle",
  error: null,
  isFinished: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startTest: (state, action: PayloadAction<string>) => {
      state.currentTestId = action.payload;
      state.currentQuestionIndex = 0;
      state.isFinished = false;
    },
    nextQuestion: (state) => {
      if (!state.currentUnit || !state.currentTestId) return;
      const test = state.currentUnit.tests.find(
        (t) => t.id === state.currentTestId,
      );
      if (!test) return;

      if (state.currentQuestionIndex < test.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isFinished = true;
      }
    },
    resetQuiz: (state) => {
      state.currentTestId = null;
      state.currentQuestionIndex = 0;
      state.isFinished = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizUnit.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizUnit.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUnit = action.payload;
        state.currentTestId = null;
        state.currentQuestionIndex = 0;
        state.isFinished = false;
      })
      .addCase(fetchQuizUnit.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch quiz";
      });
  },
});

export const { startTest, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
