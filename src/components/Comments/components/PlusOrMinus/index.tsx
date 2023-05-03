import { useDispatch } from "react-redux";
import {
  addPlusComment,
  addMinusComment,
} from "../../../../store/slices/comments";
import plus from "../../../../assets/icons/icon-plus.svg";
import minus from "../../../../assets/icons/icon-minus.svg";

interface Props {
  counter: number;
  index: number;
}

export default function PlusOrMinus({ counter, index }: Props) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5 bg-gray-200 px-3 py-5 rounded-md">
        <button
          onClick={() => {
            dispatch(addPlusComment({ index }));
          }}
        >
          <img src={plus} alt="" />
        </button>
        <span className="text-principal text-sm font-bold">{counter}</span>
        <button
          onClick={() => {
            dispatch(addMinusComment({ index }));
          }}
        >
          <img src={minus} alt="" />
        </button>
      </div>
    </div>
  );
}
