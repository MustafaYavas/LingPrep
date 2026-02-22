import { createSlice } from "@reduxjs/toolkit";
import { fetchReadingUnits } from "../async-thunk/readingThunks";
import type { ReadingState } from "../types";

const initialState: ReadingState = {
  units: [],
  status: "idle",
  error: null,
};

const readingSlice = createSlice({
  name: "reading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadingUnits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReadingUnits.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.units = action.payload;
      })
      .addCase(fetchReadingUnits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch reading units";
      });
  },
});

export default readingSlice.reducer;
