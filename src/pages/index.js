import Head from "next/head";
import AllPosts from "../components/AllPosts/AllPosts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LatestPost from "../components/LatestPost/LatestPost";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
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
    </div>
  );
};

Home.Layout = HomeLayout;

export default Home;
