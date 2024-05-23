import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function EditPost() {
  const [blogs, setBlogs] = useState({
    title: "",
    content: "",
    thumbnail: null,
  });
  const [thumbnail, setThumbnail] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  const fetchPost = async () => {
    const response = await fetch("http://localhost:5050/api/blog");
    return response.json();
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error:{error.message}</div>;

  const handleEditPost = async () => {
    try {
      if (blogs.title === "" || blogs.content === "" || !thumbnail) {
        throw new Error("Please Fill All Fields");
      }

      navigate("/");

      toast.success("Post Added Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log("blog:", blogs);
  return (
    <div className="container mx-auto max-w-5xl py-6">
      <div className="p-5">
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 items-center">
            <Link to="/">
              <BsFillArrowLeftCircleFill size={25} />
            </Link>
            <Typography variant="h4">Edit blog</Typography>
          </div>
        </div>

        <div className="mb-3">
          {/* {thumbnail && ( */}
          <img
            className="w-full h-auto rounded-md mb-3"
            // src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
            src="https://source.unsplash.com/random/?blogs"
            alt="thumbnail"
            style={{ width: "700px", height: "20rem" }}
          />
          {/* )} */}

          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-semibold"
          >
            Upload Thumbnail
          </Typography>

          <input
            type="file"
            accept="png,jpg,jpeg"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none"
            placeholder="Enter Your Title"
            name="title"
            value={blogs.title}
            onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
          />
        </div>

        <Editor
          apiKey="gvr5gi48v8rcjl51t2owuin4omsi7yry36oivczrehkhldro"
          onEditorChange={(newValue, editor) => {
            setBlogs({ ...blogs, content: newValue });
          }}
        />

        <Button
          color="blue"
          buttonType="filled"
          size="lg"
          block={true}
          ripple="light"
          onClick={handleEditPost}
          className="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default EditPost;
