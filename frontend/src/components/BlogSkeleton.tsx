import React from "react";

export const BlogSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl animate-pulse">
        <div className="col-span-8">
          <div className="text-2xl font-extrabold pt-12 bg-gray-300 h-8 rounded-full"></div>
          <br />
          <div className="text-slate-500 pt-2 bg-gray-200 h-4 rounded-full w-32 mb-4"></div>
          <div className="pt-4 bg-gray-200 h-6 rounded-md w-full"></div>
          <br />
          <div className="pt-4 bg-gray-200 h-6 rounded-md w-full"></div>
          <br />
          <div className="pt-4 bg-gray-200 h-6 rounded-md w-full"></div>
        </div>
        <div className="col-span-4">
          <div className="text-lg bg-gray-300 h-6 rounded-full mb-4"></div>
          <div className="flex w-full">
            <div className="pr-4 flex flex-col justify-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-lg font-bold bg-gray-300 h-6 rounded-full mb-2"></div>
              <div className="pt-2 text-slate-500 bg-gray-200 h-4 rounded-full w-48"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
