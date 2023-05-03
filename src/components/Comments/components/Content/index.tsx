import type { Comment } from "../../../../models/comment";
import replyIcon from "../../../../assets/icons/icon-reply.svg";

interface Props {
  comment: Comment;
}

export default function Content({ comment }: Props) {
  return (
    <div className="flex flex-col gap-5 mb-8 w-full">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <img src={comment.avatar} className="h-7 rounded-full" alt="" />
          <h4 className="font-bold">{comment.username}</h4>
          <span className="text-gray-500 font-light">2 weeks ago</span>
        </div>
        <div>
          <button className="text-principal flex items-center gap-2">
            <img src={replyIcon} alt="" />
            <span className="font-semibold">Reply</span>
          </button>
        </div>
      </div>
      <span className="text-gray-500 w-4/5">{comment.text}</span>
    </div>
  );
}
