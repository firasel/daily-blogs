import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import PostLayout from "../../layouts/PostLayout";

const Post = () => {
  return (
    <div>
      <SinglePost />
    </div>
  );
};

Post.Layout = PostLayout;

export default Post;
