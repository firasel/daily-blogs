import Head from "next/head";
import Header from "../components/Header/Header";
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
    </div>
  );
};

Home.Layout = HomeLayout;

export default Home;
