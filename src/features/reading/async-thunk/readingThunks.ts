import { createAsyncThunk } from "@reduxjs/toolkit";
import { readingService } from "../services/readingService";

export const fetchReadingUnits = createAsyncThunk(
  "reading/fetchUnits",
  async () => {
    const data = await readingService.getUnits();
    return data;
  },
);
