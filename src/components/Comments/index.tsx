import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { Comment } from "../../models/comment";
import avatar from "../../assets/avatars/image-juliusomo.png";
import replyIcon from "../../assets/icons/icon-reply.svg";
import minus from "../../assets/icons/icon-minus.svg";
import plus from "../../assets/icons/icon-plus.svg";

export default function Comments() {
  const { comments } = useSelector((state: RootState) => state.comments);

  return (
    <div className="w-2/4 m-auto pb-10">
      {comments.length > 0 &&
        comments.map((comment: Comment) => (
          <div className="bg-white mt-10 p-6 rounded-md">
            <div className="flex gap-10">
              <div>
                <div className="flex flex-col justify-center items-center gap-5 bg-gray-200 px-3 py-5 rounded-md">
                  <button>
                    <img src={plus} alt="" />
                  </button>
                  <span className="text-principal text-sm font-bold">12</span>
                  <button>
                    <img src={minus} alt="" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5 mb-8 w-full">
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <img src={avatar} className="h-5" alt="" />
                    <h4 className="font-bold">linderh3hs</h4>
                    <span className="text-gray-500 font-light">
                      2 weeks ago
                    </span>
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
            </div>
          </div>
        ))}
    </div>
  );
}
