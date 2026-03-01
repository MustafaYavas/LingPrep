import { createAsyncThunk } from "@reduxjs/toolkit";
import { writingService } from "../services/writingService";

export const fetchWritingTasks = createAsyncThunk(
  "writing/fetchTasks",
  async (level: string = "all") => {
    return await writingService.getTasks(level);
  },
);

export const fetchWritingTask = createAsyncThunk(
  "writing/fetchTask",
  async ({ level, unitId }: { level: string; unitId: number }) => {
    return await writingService.getTask(level, unitId);
  },
);
