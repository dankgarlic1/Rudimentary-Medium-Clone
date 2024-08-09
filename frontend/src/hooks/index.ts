import { useEffect, useState } from "react";
import { getBlog, getBlogs } from "../helper/api-communicator";
import { AxiosResponse } from "axios";
interface Blog {
  id: string;
  title: string;
  content: string;
  publishedDate: string;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response: AxiosResponse<Blog[]> = await getBlogs();
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return { loading, blogs };
};

export const useBlog = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response: AxiosResponse<Blog> = await getBlog({ id });
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);
  return { loading, blog };
};