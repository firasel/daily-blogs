import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { getProviders } from "next-auth/react";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import AllPosts from "../components/AllPosts/AllPosts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import Signin from "../components/Signin/Signin";
import TopPost from "../components/TopPost/TopPost";
import HomeLayout from "../layouts/HomeLayout";

const Home = ({ providers, headerPosts, allPosts }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  return (
    <div className="modifyContainer">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <title>Daily Blogs</title>
      </Head>
      <Header headerPosts={headerPosts} />
      <TopPost headerPosts={headerPosts} />
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

Home.Layout = HomeLayout;

export default Home;

export async function getServerSideProps() {
  const providers = await getProviders();

  const headerPosts = await axios
    .get("http://localhost:3000/api/public-post", {
      headers: { type: "header-post" },
    })
    .then((res) => res?.data?.data)
    .catch((err) => null);

  const allPosts = await axios
    .get(`http://localhost:3000/api/public-post?page=1`, {
      headers: { type: "all-post" },
    })
    .then((res) => res?.data?.data)
    .catch((err) => null);

  return {
    props: {
      providers,
      headerPosts,
      allPosts,
    },
  };
}
