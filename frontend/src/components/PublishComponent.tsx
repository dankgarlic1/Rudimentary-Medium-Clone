import { TextEditor } from "./shared/TextEditor";
import { Appbar } from "./Appbar";
import { useState } from "react";
import { Button } from "./shared/Button";
import toast from "react-hot-toast";
import { postBlog } from "../helper/api-communicator";

export const PublishComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handlePublish = async () => {
    try {
      toast.loading("Posting Blog", { id: "postBlog" });
      await postBlog(title, content);

      toast.success("Blog posted Successfully", { id: "postBlog" });
      // navigate("/blogs");
    } catch (error) {
      console.log(error);
      toast.error("Posting Blog Failed", { id: "postBlog" });
    }
  };

  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-full pt-4">
        <div className="max-w-screen-lg w-full">
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <div className="max-w-xs">
            <Button
              buttonName="Publish"
              onClick={handlePublish}
              color="bg-green-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
