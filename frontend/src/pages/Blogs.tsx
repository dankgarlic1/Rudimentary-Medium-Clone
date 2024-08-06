import BlogCard from "../components/BlogCard";
import { SampleBlogs } from "../helper/sample-blogs";

const Blogs = () => {
  const sampleBlog = SampleBlogs;
  return (
    <div>
      <BlogCard
        authorName={sampleBlog[0].authorName}
        title={sampleBlog[0].title}
        content={sampleBlog[0].content}
        publishedDate="18th March 2024"
      />
    </div>
  );
};

export default Blogs;
