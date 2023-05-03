import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { Comment } from "../../models/comment";

export default function Comments() {
  const { comments } = useSelector((state: RootState) => state.comments);

  return (
    <div className="p-12">
      <h1>Comentarios</h1>
      {comments.length > 0 &&
        comments.map((comment: Comment) => (
          <div>
            <span>{comment.text}</span>
          </div>
        ))}
    </div>
  );
}
