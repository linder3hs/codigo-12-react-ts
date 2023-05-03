import { configureStore } from "@reduxjs/toolkit";
import { commentSlice } from "./slices/comments";

export const store = configureStore({
  reducer: {
    comments: commentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
