import { createSlice } from "@reduxjs/toolkit";
import { fetchWritingTasks } from "../async-thunk/writingThunks";
import type { WritingState } from "../types";

const initialState: WritingState = {
  tasks: [],
  status: "idle",
  error: null,
};

const writingSlice = createSlice({
  name: "writing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWritingTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWritingTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchWritingTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch writing tasks";
      });
  },
});

export default writingSlice.reducer;
