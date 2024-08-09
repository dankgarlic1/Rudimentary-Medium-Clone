import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { useBlog } from "../hooks";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");
  useEffect(() => {
    if (loading) {
      toast.loading("Fetching the blog...", { id: "fetchBlog" });
    } else {
      toast.dismiss("fetchBlog");
    }
  }, [loading]);
  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Published on: {blog.publishedDate}</p>
      <p>Author: {blog.author.name}</p>
    </div>
  );
};

export default Blog;
