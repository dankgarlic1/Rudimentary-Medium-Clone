import { GetInitials } from "../helper/get-initials";
import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import Avatar from "./shared/Avatar";

export const FullBlogCard = ({ blog }: { blog: Blog }) => {
  const initial = GetInitials(blog.author.name);
  return (
    <div>
      <Appbar />
      <div className="flex justify center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl">
          <div className=" col-span-8">
            <div className="text-2xl font-extrabold pt-12">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on August 15 2024</div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-lg"> Author</div>
            <div className="flex w-full ">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar initials={initial} size={2} />
              </div>
              <div>
                <div className="text-lg font-bold">{blog.author.name}</div>
                <div className="pt-2 text-slate-500">
                  I build things with more passion than a caffeinated squirrel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
