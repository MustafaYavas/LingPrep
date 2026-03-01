import { createAsyncThunk } from "@reduxjs/toolkit";
import { listeningService } from "../services/listeningService";

export const fetchListeningTasks = createAsyncThunk(
  "listening/fetchTasks",
  async (level?: string) => {
    const data = await listeningService.getTasks(level || "all");
    return data;
  },
);
