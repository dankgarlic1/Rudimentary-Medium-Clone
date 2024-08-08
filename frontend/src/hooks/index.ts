import { useEffect, useState } from "react";
import { getBlogs } from "../helper/api-communicator";
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
