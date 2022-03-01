import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { getProviders } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import AllPosts from "../components/AllPosts/AllPosts";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import Signin from "../components/Signin/Signin";
import SimpleLayout from "../layouts/SimpleLayout";

const Posts = ({ providers, allPosts }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  return (
    <div className="modifyContainer font-[Poppins]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <title>Posts - Daily Blogs</title>
      </Head>
      <Navbar />
      <AllPosts allPosts={allPosts} />
      <Footer />
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

Posts.Layout = SimpleLayout;

export default Posts;

export async function getServerSideProps() {
  const providers = await getProviders();

  const allPosts = await axios
    .get(`http://localhost:3000/api/public-post?page=1`, {
      headers: { type: "all-post" },
    })
    .then((res) => res?.data?.data)
    .catch((err) => null);

  return {
    props: {
      providers,
      allPosts,
    },
  };
}
