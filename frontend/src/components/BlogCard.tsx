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
    <div className="border border-slate-400 pb-4">
      <div className="flex ">
        <div className="flex justify-center flex-col">
          <Avatar initials={initials} />{" "}
        </div>
        <div className="font-extralight pl-2">{props.authorName}</div>{" "}
        <div className="flex justify-center flex-col pl-2">
          <BlackCircle />
        </div>
        <div className="pl-2 font-thin text-slate-500">
          {props.publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold">{props.title}</div>
      <div className="text-md font-thin">
        {props.content.slice(0, 100) + "..."}
      </div>
      <div className="w-full text-slate-400 font-thin text-sm">
        {Math.ceil(props.content.length / 100) + " min read"}
      </div>
    </div>
  );
};

export default BlogCard;
