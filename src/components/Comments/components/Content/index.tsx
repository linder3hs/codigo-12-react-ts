import { useState } from "react";
import type { Comment } from "../../../../models/comment";
import replyIcon from "../../../../assets/icons/icon-reply.svg";
import editIcon from "../../../../assets/icons/icon-edit.svg";
import deleteIcon from "../../../../assets/icons/icon-delete.svg";

interface Props {
  comment: Comment;
}

export default function Content({ comment }: Props) {
  const [showFormUpdate, setShowFormUpdate] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5 mb-8 w-full">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <img src={comment.avatar} className="h-7 rounded-full" alt="" />
          <h4 className="font-bold">{comment.username}</h4>
          <span className="text-gray-500 font-light">2 weeks ago</span>
        </div>
        <div className="flex gap-6">
          <button
            disabled={showFormUpdate}
            className={`text-red-500 flex items-center gap-2 ${
              showFormUpdate ? "opacity-50" : ""
            }`}
          >
            <img src={deleteIcon} alt="" />
            <span className="font-semibold">Delete</span>
          </button>
          <button
            disabled={showFormUpdate}
            className={`text-principal flex items-center gap-2 ${
              showFormUpdate ? "opacity-50" : ""
            }`}
            onClick={() => setShowFormUpdate(!showFormUpdate)}
          >
            <img src={editIcon} alt="" />
            <span className="font-semibold">Edit</span>
          </button>
          <button
            disabled={showFormUpdate}
            className={`text-principal flex items-center gap-2 ${
              showFormUpdate ? "opacity-50" : ""
            }`}
          >
            <img src={replyIcon} alt="" />
            <span className="font-semibold">Reply</span>
          </button>
        </div>
      </div>
      {!showFormUpdate ? (
        <span className="text-gray-500 w-4/5">{comment.text}</span>
      ) : (
        <div>
          <textarea
            value={comment.text}
            className="border resize-none py-2 px-5 rounded-md w-full focus:outline-none"
            rows={5}
            placeholder="Add a comment..."
          ></textarea>
          <div className="flex gap-5">
            <button className="rounded-md bg-principal py-2 px-6 text-white">
              Update
            </button>
            <button
              className="text-red-500"
              onClick={() => setShowFormUpdate(!showFormUpdate)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
