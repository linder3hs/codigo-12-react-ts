import { FormComment, Comments } from "./components";

export default function App() {
  return (
    <>
      <div className="bg-gray-200 flex flex-col h-screen items-center relative pb-12">
        <div className="overflow-auto h-4/5 mb-20">
          <Comments />
        </div>
        <div className="absolute bottom-0 w-full">
          <FormComment />
        </div>
      </div>
    </>
  );
}
