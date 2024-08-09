export const BlogsSkeleton = () => (
  <div className="border-b border-slate-400 p-4 max-w-xl w-full animate-pulse">
    <div className="flex">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="flex flex-col justify-center pl-2">
        <div className="h-4 bg-gray-300 rounded-full w-24 mb-2.5"></div>
        <div className="w-32 h-3 bg-gray-200 rounded-full"></div>
      </div>
      <div className="flex justify-center flex-col pl-2">
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      </div>

      <div className="flex flex-col justify-center pl-2">
        <div className="h-4 bg-gray-300 rounded-full w-24 mb-2.5"></div>

        <div className="w-32 h-3 bg-gray-200 rounded-full"></div>
      </div>
    </div>
    <div className="text-xl font-semibold pt-2 h-6 bg-gray-300 rounded-full"></div>

    <div className="mb-2 text-md font-thin mt-2 h-4 bg-gray-200 rounded-full w-full"></div>

    <div className="w-full text-slate-400 font-thin text-sm pt-2 h-4 bg-gray-200 rounded-full"></div>
  </div>
);
