import { GetInitials } from "../helper/get-initials";
import Avatar from "./shared/Avatar";
import BlackCircle from "./shared/BlackCircle";

interface Props {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
export const BlogCard = (props: Props) => {
  const initials = GetInitials(props.authorName);
  return (
    <div className="border-b border-slate-400 p-4">
      <div className="flex ">
        <Avatar initials={initials} size={6} />{" "}
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          {props.authorName}
        </div>{" "}
        <div className="flex justify-center flex-col pl-2">
          <BlackCircle />
        </div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          {props.publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">{props.title}</div>
      <div className="text-md font-thin">
        {props.content.slice(0, 100) + "..."}
      </div>
      <div className="w-full text-slate-400 font-thin text-sm pt-2">
        {Math.ceil(props.content.length / 100) + " min read"}
      </div>
    </div>
  );
};

export default BlogCard;
