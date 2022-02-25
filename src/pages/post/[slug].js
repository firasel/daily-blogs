import { useRouter } from "next/router";
import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import PostLayout from "../../layouts/PostLayout";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <SinglePost />
    </div>
  );
};

Post.Layout = PostLayout;

export default Post;
