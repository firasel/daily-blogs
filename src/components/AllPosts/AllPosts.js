import React from "react";
import Posts from "../Posts/Posts";
import Subscribe from "../Subscribe/Subscribe";

const AllPosts = () => {
  return (
    <div>
      <h4 className="text-2xl md:text-3xl font-semibold font-[Poppins] mb-5 mt-10">All Posts</h4>
      <div className="lg:flex gap-6">
        <Posts />
        <Subscribe />
      </div>
    </div>
  );
};

export default AllPosts;
