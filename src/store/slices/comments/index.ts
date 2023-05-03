import { createSlice } from "@reduxjs/toolkit";

interface Comment {
  text: string;
  created_at: Date | string;
  avatar: string;
  username: string;
}

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
