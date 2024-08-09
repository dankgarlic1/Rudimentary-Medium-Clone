import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { useBlog } from "../hooks";
import { FullBlogCard } from "../components/Fullblog";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");
  // useEffect(() => {
  //   if (loading) {
  //     toast.loading("Fetching the blog...", { id: "fetchBlog" });
  //   } else {
  //     toast.dismiss("fetchBlog");
  //   }
  // }, [loading]);
  // if (loading) return <div>Loading...</div>;
  // if (!blog) return <div>Blog not found</div>;
  const [secondsLeft, setSecondsLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      const toastId = "fetchBlog";

      // Show the initial loading toast
      toast.loading(`Fetching the blog... Time remaining: ${secondsLeft}s`, {
        id: toastId,
      });

      // Function to update the toast message with remaining time
      const updateToastMessage = () => {
        toast.loading(`Fetching the blog... Time remaining: ${secondsLeft}s`, {
          id: toastId,
        });
      };

      // Start countdown timer
      const timer = setInterval(() => {
        setSecondsLeft((prev) => {
          const newSeconds = prev - 1;
          if (newSeconds <= 0) {
            clearInterval(timer);
            toast.dismiss(toastId);
            toast.error(
              "Fetching the blog took too long. Please try again later."
            );
            navigate("/blogs");
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

      // Cleanup on component unmount
      return () => {
        clearInterval(timer);
        toast.dismiss(toastId);
      };
    } else {
      toast.dismiss("fetchBlog");
    }
  }, [loading]);

  if (loading)
    return (
      <div className="mt-20">
        <BlogSkeleton />
      </div>
    );
  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <FullBlogCard blog={blog} />
    </div>
  );
};

export default Blog;
