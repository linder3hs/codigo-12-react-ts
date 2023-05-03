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
        avatar:
          "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
        text,
        username: "linder3hs",
        counter: 0,
      })
    );

    setText("");
  };

  return (
    <div className="pb-10">
      <div className="bg-white rounded-md flex gap-10 p-6">
        <div>
          <img className="h-10" src={avatar} alt="" />
        </div>
        <div className="grow">
          <textarea
            value={text}
            onChange={handleInputChange}
            className="border resize-none py-2 px-5 rounded-md w-full focus:outline-none"
            rows={5}
            placeholder="Add a comment..."
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleSaveComment}
            className="rounded-md bg-principal py-2 px-6 text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
