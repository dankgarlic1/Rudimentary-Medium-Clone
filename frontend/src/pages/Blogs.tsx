import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
// import { SampleBlogs } from "../helper/sample-blogs";
import { useBlogs } from "../hooks";
import toast from "react-hot-toast";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  // // Show a loading toast when fetching blogs
  // useEffect(() => {
  //   if (loading) {
  //     toast.loading("Fetching Blogs for you", { id: "fetchBlogs" });
  //   } else {
  //     toast.dismiss("fetchBlogs");
  //   }
  // }, [loading]);
  const [, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(30);

  useEffect(() => {
    if (loading) {
      const toastId = "fetchBlogs";

      // Show the initial loading toast
      toast.loading(`Fetching Blogs for you. Time remaining: ${secondsLeft}s`, {
        id: toastId,
      });

      // Function to update the toast message with remaining time
      const updateToastMessage = () => {
        toast.loading(
          `Fetching Blogs for you. Time remaining: ${secondsLeft}s`,
          {
            id: toastId,
          }
        );
      };

      // Start countdown timer
      const timer = setInterval(() => {
        setSecondsLeft((prev) => {
          const newSeconds = prev - 1;
          if (newSeconds <= 0) {
            clearInterval(timer);
            toast.dismiss(toastId);
            toast.error(
              "Fetching Blogs took too long. Please try again later."
            );

            return 0;
          } else {
            updateToastMessage();
            return newSeconds;
          }
        });
      }, 1000);

      // Clear the timer and toast if loading finishes
      const clearLoading = () => {
        clearInterval(timer);
        toast.dismiss(toastId);
      };

      if (!loading) {
        clearLoading();
      }

      // Save timeoutId to clear it later if needed
      setTimeoutId(timer);
      return () => {
        clearInterval(timer); // Cleanup on component unmount
        toast.dismiss(toastId);
      };
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
              id={blog.id}
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
