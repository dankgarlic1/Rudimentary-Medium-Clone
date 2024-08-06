import { GetInitials } from "../helper/get-initials";
import Avatar from "./shared/Avatar";

interface Props {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
export const BlogCard = (props: Props) => {
  const initials = GetInitials(props.authorName);
  return (
    <div>
      <div className="flex">
        <Avatar initials={initials} />{" "}
        <div className="font-extralight">{props.authorName}</div> .{" "}
        {props.publishedDate}
      </div>
      <div>{props.title}</div>
      <div>{props.content.slice(0, 100) + "..."}</div>
      <div>{Math.ceil(props.content.length / 100) + "minutes"}</div>
      <div className="bg-slate-900 h-0.5 w-full"></div>
    </div>
  );
};

export default BlogCard;
