import { createSlice } from "@reduxjs/toolkit";
import { fetchListeningTasks } from "../async-thunk/listeningThunks";
import type { ListeningState } from "../types";

const initialState: ListeningState = {
  tasks: [],
  status: "idle",
  error: null,
};

const listeningSlice = createSlice({
  name: "listening",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListeningTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListeningTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchListeningTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch listening tasks";
      });
  },
});

export default listeningSlice.reducer;
