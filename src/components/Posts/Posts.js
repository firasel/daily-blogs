import React from "react";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className="w-full font-[Poppins]">
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-7">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Posts;
