import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
function CreateBlog() {
  const [blogs, setBlogs] = useState("");
  const [thumbnail, setthumbnail] = useState();

  const [text, settext] = useState("");
  console.log("Value: ");
  console.log("text: ", text);

  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <div className=" container mx-auto max-w-5xl py-6">
      <div className="p-5">
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 items-center">
            <Link to="/">
              <BsFillArrowLeftCircleFill size={25} />
            </Link>

            <Typography variant="h4">Create blog</Typography>
          </div>
        </div>

        <div className="mb-3">
          {thumbnail && (
            <img
              className="w-full h-auto rounded-md mb-3"
              src={thumbnail ? URL.createObjectURL(thumbnail) : ""}
              alt="thumbnail"
              style={{ maxWidth: "1200px", height: "20rem", width: "20rem" }}
            />
          )}

          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-semibold"
          >
            Upload Thumbnail
          </Typography>

          <input
            type="file"
            label="Upload thumbnail"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
            onChange={(e) => setthumbnail(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <input
            label="Enter your Title"
            className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none  `}
            placeholder="Enter Your Title"
            name="title"
          />
        </div>

        <div className="mb-3">
          <input
            label="Enter your Category"
            className={`shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 
                 outline-none  `}
            placeholder="Enter Your Category"
            name="category"
          />
        </div>

        <Editor
          apiKey="gvr5gi48v8rcjl51t2owuin4omsi7yry36oivczrehkhldro"
          onEditorChange={(newValue, editor) => {
            setBlogs({ blogs, content: newValue });
            settext(editor.getContent({ format: "text" }));
          }}
          onInit={(evt, editor) => {
            settext(editor.getContent({ format: "text" }));
          }}
          init={{
            plugins:
              "a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount",
          }}
        />

        <Button
          color="blue"
          buttonType="filled"
          size="lg"
          block={true}
          ripple="light"
          className="mt-5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Send
        </Button>

        <div className="">
          <h1 className=" text-center mb-3 text-2xl">Preview</h1>
          <div className="content">
            <div
              className={`[&> h1]:text-[32px] [&>h1]:font-bold  [&>h1]:mb-2.5
                         

                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                        

                        [&>h3]:text-[18.72] [&>h3]:font-bold [&>h3]:mb-2.5
                        placeholder:

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        placeholder:

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                         

                        [&>p]:text-[16px] [&>p]:mb-1.5
                        

                        [&>ul]:list-disc [&>ul]:mb-2
                        placeholder:

                        [&>ol]:list-decimal [&>li]:mb-10
                         placeholder:

                        [&>li]:list-decimal [&>ol]:mb-2
                        

                        [&>img]:rounded-lg
                        `}
              dangerouslySetInnerHTML={createMarkup(blogs.content)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;