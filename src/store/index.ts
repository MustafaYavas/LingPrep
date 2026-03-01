import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import progressReducer from "@/features/progress/store/progressSlice";
import quizReducer from "@/features/quiz/store/quizSlice";
import { readingReducer } from "@/features/reading";
import { writingReducer } from "@/features/writing";
import { listeningReducer } from "@/features/listening";

const persistConfig = {
  key: "lingprep-root",
  storage,
  whitelist: ["progress"], // Only persist the progress slice
};

const rootReducer = combineReducers({
  progress: progressReducer,
  quiz: quizReducer,
  reading: readingReducer,
  writing: writingReducer,
  listening: listeningReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {progress: UserProgressState}
export type AppDispatch = typeof store.dispatch;
