import { useSession } from "next-auth/react";
import React from "react";
import TimeagoReact from "timeago-react";
import AuthorCard from "../AuthorCard/AuthorCard";
import Subscribe from "../Subscribe/Subscribe";

const SinglePost = ({ postData }) => {
  const { post, user } = postData;
  const { data: session } = useSession({});
  return (
    <div className="lg:flex gap-7 font-[Poppins] mt-5 lg:mt-7">
      <div className="w-full">
        <div className="overflow-hidden rounded-2xl">
          <img className="w-full" src={post.imgUrl} alt="Post image" />
        </div>
        <h2 className="text-3xl font-semibold mt-5">{post.title}</h2>
        <p className="text-gray-700 text-base mt-1 mb-4">
          <TimeagoReact datetime={post.updatedAt} />
        </p>
        <div
          className="postContent prose lg:prose-xl xl:prose-2xl prose-blockquote:bg-gray-400  "
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
        <div className="tags text-lg mt-4 flex flex-wrap">
          <span className="font-semibold text-xl py-2 mr-2">Tags: </span>

          {post?.tags?.map((data, index) => (
            <h6
              key={index}
              className="bg-slate-100 p-2 rounded-md mr-1 sm:mr-2 hover:text-[#fe5f55] transition-all duration-200 cursor-pointer mb-2"
            >
              {data}
            </h6>
          ))}
        </div>
      </div>
      <div>
        <AuthorCard user={user} />
        {!session && <Subscribe />}
      </div>
    </div>
  );
};

export default SinglePost;
