import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import ErrorToast from "../../helper/ErrorToast";
import Loading from "../DashboardComponents/Loading/Loading";
import PostCard from "./PostCard";

const Posts = () => {
  const [allPostData, setAllPostData] = useState({});
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { nextPost, posts: allPosts, users } = allPostData;
  console.log(nextPost, allPosts, users);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/public-post", { headers: { type: "all-post" } })
      .then((res) => {
        setLoading(false);
        setAllPostData(res?.data?.data);
      })
      .catch((err) => {
        ErrorToast("Post not found.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full font-[Poppins]">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 items-start gap-7">
        {allPosts.map((data, index) => (
          <PostCard key={index} data={data} users={users} />
        ))}
      </div>
      {loading && (
        <div className="my-5">
          <Loading />
        </div>
      )}
      <div className="flex mt-7 gap-3 items-center justify-end">
        {pageNum > 1 && (
          <button className="px-4 py-1 bg-[#fe5f55] hover:bg-[#f0564b] text-white rounded-md text-3xl transition-all duration-200">
            <RiArrowLeftSLine />
          </button>
        )}
        {nextPost && (
          <button className="px-4 py-1 bg-[#fe5f55] hover:bg-[#f0564b] text-white rounded-md text-3xl transition-all duration-200">
            <RiArrowRightSLine />
          </button>
        )}
      </div>
    </div>
  );
};

export default Posts;
