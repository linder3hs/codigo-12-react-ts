import { FormComment, Comments } from "./components";

export default function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-2/4 m-auto relative pb-12">
        <div className="overflow-auto h-4/5 mb-20 scrollbar-hide">
          <Comments />
        </div>
        <div className="absolute bottom-0 w-full">
          <FormComment />
        </div>
      </div>
    </>
  );
}
