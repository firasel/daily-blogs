import { useSession } from "next-auth/react";
import React from "react";
import Posts from "../Posts/Posts";
import Subscribe from "../Subscribe/Subscribe";

const AllPosts = ({allPosts}) => {
  const { data: session } = useSession({});
  return (
    <div>
      <h4 className="text-2xl md:text-3xl font-semibold font-[Poppins] mb-5 mt-10">All Posts</h4>
      <div className="lg:flex gap-6">
        <Posts postsData={allPosts} />
        {!session && <Subscribe />}
      </div>
    </div>
  );
};

export default AllPosts;
