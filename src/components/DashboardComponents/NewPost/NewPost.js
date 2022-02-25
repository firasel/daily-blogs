import axios from "axios";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { WithContext as ReactTags } from "react-tag-input";
import "suneditor/dist/css/suneditor.min.css";
import ErrorToast from "../../../helper/ErrorToast";
import SuccessToast from "../../../helper/SuccessToast";
import postSchema from "./postSchema";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const KeyCodes = {
  comma: 188,
  enter: 13,
  space: 32,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.space];

const NewPost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [imgLoading, setImgLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [tags, setTags] = useState([]);
  const { data: session } = useSession({});

  // Handle tags delete
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  // Handle tags add
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  // Image Upload handle
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "a52d1dcbb5d9055fd1a000e42d4f0578");
    imageData.append("image", event.target.files[0]);

    setImgLoading(true);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setImgLoading(false);
        setImgUrl(res?.data?.data?.display_url);
      })
      .catch((err) => {
        setImgLoading(false);
        setImgUrl("");
        alert("Image can't upload, Plaese try again.");
      });
  };

  // Image delete handle
  const handleImageDelete = () => {
    setImgUrl("");
  };

  // Handle post submit
  const handlePostCreate = async () => {
    // Tags modify
    const Alltags = (await tags?.map((data) => data.text)) || [];
    // Post data object create
    const postData = {
      title,
      tags: Alltags,
      imgUrl,
      content,
      email: session?.user?.email,
    };
    // Verify data is correct or not
    postSchema
      .validate(postData)
      .then((res) => {
        // Send request to backend
        axios
          .post("/api/post", res)
          .then((res) => {
            console.log(res.data);
            SuccessToast("Post created successfully.");
          })
          .catch((err) => {
            ErrorToast("Post not created, Please try again.");
          });
      })
      .catch((err) => {
        if (err) {
          ErrorToast(err?.message);
        }
      });
  };

  return (
    <div className="sm:modifyContainer mx-auto">
      {/* Post cover image preview */}
      {imgUrl?.length !== 0 && (
        <div className="w-2/3 sm:w-1/3 rounded-md overflow-hidden h-auto relative cursor-pointer imageContainer">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            src={imgUrl}
            alt="cover image"
          />
          <button
            onClick={handleImageDelete}
            className="removeBtn hidden text-3xl p-2 text-black hover:text-red-500 transition-all duration-200 bg-white rounded absolute bottom-1 right-1"
          >
            <FaTrashAlt />
          </button>
        </div>
      )}
      {/* Post cover image upload */}
      {imgUrl?.length === 0 && (
        <div className="overflow-hidden relative w-56 mt-4 mb-4">
          <button className="bg-slate-100 hover:bg-slate-200 text-black font-bold py-2 px-2 w-full inline-flex items-center rounded-md transition-all duration-200">
            {imgLoading ? (
              <div className="w-fit mx-auto">
                <svg
                  role="status"
                  className="mr-2 w-8 h-8 text-[#fe5f55] animate-spin fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <span className="text-center w-full">Add a cover image</span>
            )}
          </button>
          <input
            className="cursor-pointer absolute block opacity-0 top-0 left-0"
            type="file"
            onChange={handleImageUpload}
          />
        </div>
      )}
      {/* Post cover image end */}
      {/* Post title */}
      <textarea
        className="font-bold text-xl md:text-2xl lg:text-3xl w-full outline-none border-0 rounded-md mb-3 mt-5 py-2 px-2"
        rows={1}
        autoFocus
        placeholder="New post title here..."
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Post tags start */}
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="bottom"
        autocomplete
        placeholder="Add up to 5 tags..."
        allowDragDrop={false}
      />
      {/* Post tags end */}
      {/* Post content editor start */}
      <div className="w-full overflow-hidden">
        <SunEditor
          defaultValue={content}
          onChange={(text) => setContent(text)}
          height="50vh"
          width="auto"
          className="h-44"
          placeholder="Write your post content here..."
          setOptions={{
            buttonList: [
              [
                "formatBlock",
                "font",
                "fontSize",
                "fontColor",
                "align",
                "paragraphStyle",
                "blockquote",
              ],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
              ],
              ["removeFormat"],
              ["outdent", "indent"],
              ["table", "list"],
              ["link", "video"],
            ],
          }}
        />
      </div>
      {/* Post content editor end */}
      {/* Post submit */}
      <div className="flex gap-4 my-4 justify-end">
        <button className="px-4 py-2 text-gray-700 font-medium tracking-wider bg-slate-200 hover:scale-105 transition-all duration-200 rounded">
          Save draft
        </button>
        <button
          onClick={handlePostCreate}
          className="px-4 py-2 text-white font-semibold tracking-wider bg-[#fe5f55] hover:scale-105 transition-all duration-200 rounded"
        >
          Publish
        </button>
      </div>
    </div>
  );
};
export default NewPost;
