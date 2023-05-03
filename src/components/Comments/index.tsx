import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { Comment } from "../../models/comment";
import avatar from "../../assets/avatars/image-juliusomo.png";
import replyIocn from "../../assets/icons/icon-reply.svg";

export default function Comments() {
  const { comments } = useSelector((state: RootState) => state.comments);

  return (
    <div className="w-2/3 m-auto pb-10">
      {comments.length > 0 &&
        comments.map((comment: Comment) => (
          <div className="bg-white mt-10 p-6 rounded-md">
            <div className="flex justify-between gap-5 mb-8">
              <div className="flex gap-5">
                <img src={avatar} className="h-5" alt="" />
                <h4 className="font-bold">linderh3hs</h4>
                <span className="text-gray-500 font-light">2 weeks ago</span>
              </div>
              <div>
                <button className="text-blue-600 flex items-center gap-2">
                  <img src={replyIocn} alt="" />
                  <span className="font-semibold">Reply</span>
                </button>
              </div>
            </div>
            <span className="text-gray-500">{comment.text}</span>
          </div>
        ))}
    </div>
  );
}
