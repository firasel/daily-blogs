import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const PostLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="modifyContainer">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PostLayout;
