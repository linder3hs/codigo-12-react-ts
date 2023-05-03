import { FormComment, Comments } from "./components";

export default function App() {
  return (
    <>
      <div className="bg-gray-200 flex flex-col justify-center">
        <Comments />
        <FormComment />
      </div>
    </>
  );
}
