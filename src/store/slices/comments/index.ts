import { createSlice } from "@reduxjs/toolkit";
import type { Comment } from "../../../models/comment";

export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    addComment: (
      state: { comments: Comment[] },
      action: { payload: Comment }
    ) => {
      state.comments = [...state.comments, action.payload];
    },
  },
});

export const { addComment } = commentSlice.actions;
