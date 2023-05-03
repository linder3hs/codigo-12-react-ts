import { useState, ChangeEvent } from "react";
import type { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addComment } from "../../store/slices/comments";
import avatar from "../../assets/avatars/image-juliusomo.png";

export default function FormComment() {
  const [text, setText] = useState<string>("");

  const dispatch: Dispatch<AnyAction> = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSaveComment = () => {
    if (!text) return;

    dispatch(
      addComment({
        avatar: "",
        created_at: new Date(),
        text,
        username: "linder3hs",
      })
    );

    setText("");
  };

  return (
    <>
      <div className="bg-white m-6 rounded-md flex justify-center gap-10 p-6">
        <div>
          <img className="h-10" src={avatar} alt="" />
        </div>
        <div>
          <textarea
            value={text}
            onChange={handleInputChange}
            className="border resize-none py-2 px-5 rounded-md focus:outline-none"
            rows={5}
            cols={30}
            placeholder="Add a comment..."
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleSaveComment}
            className="rounded-md bg-purple-500 py-2 px-6 text-white"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
