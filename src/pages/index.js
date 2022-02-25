import { AnimatePresence } from "framer-motion";
import { getProviders, useSession } from "next-auth/react";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import AllPosts from "../components/AllPosts/AllPosts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LatestPost from "../components/LatestPost/LatestPost";
import Modal from "../components/Modal/Modal";
import Signin from "../components/Signin/Signin";
import HomeLayout from "../layouts/HomeLayout";

const Home = ({ providers }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("Not authorized");
    },
  });

  return (
    <div className="modifyContainer">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <LatestPost />
      <AllPosts />
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

export async function getServerSideProps(context) {
  const providers = await getProviders();
  console.log("server", providers);
  return {
    props: {
      providers,
    },
  };
}
