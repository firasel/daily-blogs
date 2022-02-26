import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Header = ({ headerPosts }) => {
  return (
    <>
      <Navbar />
      <Hero headerPosts={headerPosts} />
    </>
  );
};

export default Header;
