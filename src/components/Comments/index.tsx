import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { Comment } from "../../models/comment";
import { PlusOrMinus, Content } from "./components";

export default function Comments() {
  const { comments } = useSelector((state: RootState) => state.comments);

  return (
    <div className="pb-10">
      {comments.length > 0 &&
        comments.map((comment: Comment, index: number) => (
          <div key={index} className="bg-white mt-10 p-6 rounded-md">
            <div className="flex gap-10">
              <PlusOrMinus counter={comment.counter} index={index} />
              <Content comment={comment} index={index} />
            </div>
          </div>
        ))}
    </div>
  );
}
