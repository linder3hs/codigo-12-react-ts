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
    addPlusComment: (
      state: { comments: Comment[] },
      action: { payload: { index: number } }
    ) => {
      state.comments[action.payload.index].counter += 1;
    },
    addMinusComment: (
      state: { comments: Comment[] },
      action: { payload: { index: number } }
    ) => {
      if (state.comments[action.payload.index].counter <= 0) return;
      
      state.comments[action.payload.index].counter -= 1;
    },
  },
});

export const { addComment, addPlusComment, addMinusComment } =
  commentSlice.actions;
