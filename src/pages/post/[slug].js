import axios from "axios";
import React from "react";
import SinglePost from "../../components/SinglePost/SinglePost";
import PostLayout from "../../layouts/PostLayout";

export const getStaticPaths = async () => {
  const allPostId = await axios
    .get("http://localhost:3000/api/public-post", { headers: { type: "id" } })
    .then((res) => res?.data?.data)
    .catch((err) => []);

  const paths = allPostId.map((data) => {
    return {
      params: { slug: data._id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await axios
    .get(`http://localhost:3000/api/public-post?id=${params.slug}`, {
      headers: { type: "post" },
    })
    .then((res) => res?.data?.data)
    .catch((err) => {});

  return {
    props: { postData },
    revalidate: 1,
  };
};

const Post = ({ postData }) => {

  return (
    <div>
      <SinglePost postData={postData} />
    </div>
  );
};

Post.Layout = PostLayout;

export default Post;
