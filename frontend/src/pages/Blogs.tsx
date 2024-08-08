import { useEffect } from "react";
import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
// import { SampleBlogs } from "../helper/sample-blogs";
import { useBlogs } from "../hooks";
import toast from "react-hot-toast";

const Blogs = () => {
  // const sampleBlog = SampleBlogs;
  const { loading, blogs } = useBlogs();
  // Show a loading toast when fetching blogs
  useEffect(() => {
    if (loading) {
      toast.loading("Fetching Blogs for you", { id: "fetchBlogs" });
    } else {
      toast.dismiss("fetchBlogs");
    }
  }, [loading]);
  return (
    <div>
      <Appbar />
      <div className="flex justify-center ">
        <div className="flex justify-center max-w-xl flex-col">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
            />
          ))}
          {/* <BlogCard
            authorName={sampleBlog[0].authorName}
            title={sampleBlog[0].title}
            content={sampleBlog[0].content}
            publishedDate="18th March 2024"
          />
          <BlogCard
            authorName={sampleBlog[1].authorName}
            title={sampleBlog[1].title}
            content={sampleBlog[1].content}
            publishedDate="18th March 2024"
          />
          <BlogCard
            authorName={sampleBlog[2].authorName}
            title={sampleBlog[2].title}
            content={sampleBlog[2].content}
            publishedDate="18th March 2024"
          />
          <BlogCard
            authorName={sampleBlog[3].authorName}
            title={sampleBlog[3].title}
            content={sampleBlog[3].content}
            publishedDate="18th March 2024"
          />
          <BlogCard
            authorName={sampleBlog[4].authorName}
            title={sampleBlog[4].title}
            content={sampleBlog[4].content}
            publishedDate="18th March 2024"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
