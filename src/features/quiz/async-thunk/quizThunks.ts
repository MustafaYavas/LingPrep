import { createAsyncThunk } from "@reduxjs/toolkit";
import { quizService } from "../services/quizService";

export const fetchQuizUnit = createAsyncThunk(
  "quiz/fetchUnit",
  async (unitId: number) => {
    const data = await quizService.getUnit(unitId);
    return data;
  },
);
