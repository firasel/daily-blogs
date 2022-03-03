import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { getProviders } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import Modal from "../../components/Modal/Modal";
import Signin from "../../components/Signin/Signin";
import SinglePost from "../../components/SinglePost/SinglePost";
import PostLayout from "../../layouts/PostLayout";

export const getStaticPaths = async () => {
  const allPostId = await axios
    .get("https://daily-blogs.vercel.app/api/public-post", {
      headers: { type: "id" },
    })
    .then((res) => res?.data?.data || [])
    .catch((err) => []);

  const paths = allPostId.map((data) => {
    return {
      params: { slug: data._id },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const providers = await getProviders();
  const postData = await axios
    .get(`https://daily-blogs.vercel.app/api/public-post?id=${params.slug}`, {
      headers: { type: "post" },
    })
    .then((res) => res?.data?.data || {})
    .catch((err) => {});

  return {
    props: { postData, providers },
    revalidate: 3,
  };
};

const Post = ({ postData, providers }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const title = postData?.post?.title ? postData?.post?.title + " - " : "";
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <title>{title} Daily Blogs</title>
      </Head>
      <SinglePost postData={postData} />
      <AnimatePresence>
        {modalOpen && (
          <Modal handleClose={() => setModalOpen(false)}>
            <Signin providers={providers} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

Post.Layout = PostLayout;

export default Post;
