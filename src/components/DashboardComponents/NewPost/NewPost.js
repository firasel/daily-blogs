import axios from "axios";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { WithContext as ReactTags } from "react-tag-input";
import "suneditor/dist/css/suneditor.min.css";
import ErrorToast from "../../../helper/ErrorToast";
import SuccessToast from "../../../helper/SuccessToast";
import Loading from "../Loading/Loading";
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
  const [description, setDescription] = useState("");
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
  const handlePostCreate = async (type) => {
    // Tags modify
    const Alltags = (await tags?.map((data) => data.text)) || [];
    // Post data object create
    const postData = {
      title,
      tags: Alltags,
      imgUrl,
      content,
      email: session?.user?.email,
      description,
      publish: true,
    };
    // Verify data is correct or not
    postSchema
      .validate(postData)
      .then((res) => {
        if (type === "draft") res.publish = false;
        // Send request to backend
        axios
          .post("/api/post", res)
          .then((res) => {
            type === "draft"
              ? SuccessToast("Post saved successfully.")
              : SuccessToast("Post published successfully.");
            setContent("");
            setTitle("");
            setDescription("");
            setImgUrl("");
            setTags([]);
          })
          .catch((err) => {
            type === "draft"
              ? ErrorToast("Post not saved, Please try again.")
              : ErrorToast("Post not published, Please try again.");
          });
      })
      .catch((err) => {
        if (err) {
          ErrorToast(err?.message);
        }
      });
  };

  return (
    <>
      <Head>
        <title>New Post - Daily Blogs</title>
      </Head>
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
                <Loading />
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Post short description */}
        <textarea
          className="font-medium text-lg md:text-xl lg:text-2xl w-full outline-none border-0 rounded-md mb-3 mt-5 py-2 px-2"
          rows={1}
          autoFocus
          placeholder="Short description..."
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
            // defaultValue={content}
            onChange={(text) => setContent(text)}
            setContents={content}
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
          <button
            onClick={() => handlePostCreate("draft")}
            className="px-4 py-2 text-gray-700 font-medium tracking-wider bg-slate-200 hover:scale-105 transition-all duration-200 rounded"
          >
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
    </>
  );
};
export default NewPost;
