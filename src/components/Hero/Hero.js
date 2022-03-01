import { useRouter } from "next/router";
import React from "react";
import TimeagoReact from "timeago-react";

const Hero = ({ headerPosts }) => {
  const { posts, users } = headerPosts || {};
  const [firstPost, ...allPosts] = posts?.slice(0, 4) || [];
  const router = useRouter();

  return (
    <div className="lg:flex gap-7 mt-5 font-[Poppins]">
      <div
        onClick={() => router.push(`/post/${firstPost?._id}`)}
        className="w-full cursor-pointer"
      >
        <div className="w-full rounded-3xl overflow-hidden">
          <img className="w-full" src={firstPost?.imgUrl} alt="blog image" />
        </div>
        <div className="mt-7">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#111827]">
            {firstPost?.title}
          </h3>
          <p className="text-[#6b7280] text-base hidden sm:block">
            {firstPost?.description.slice(0, 160) + "..."}
          </p>
          <div className="text-xs sm:text-sm flex items-center gap-2 mt-5">
            <div className="w-7 h-7">
              <img
                className="rounded-full w-full"
                src={
                  users?.filter((user) => user?.email === firstPost?.email)[0]
                    ?.image
                }
                alt="profile"
              />
            </div>
            <span className="text-[#374151]">
              {
                users?.filter((user) => user?.email === firstPost?.email)[0]
                  ?.name
              }
            </span>
            .
            <span className="text-[#6b7280]">
              <TimeagoReact datetime={firstPost?.updatedAt} />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-7 mt-8 lg:mt-0">
        {allPosts?.map((data, index) => (
          <div
            onClick={() => router.push(`/post/${data?._id}`)}
            key={index}
            className="flex gap-5 justify-between cursor-pointer"
          >
            <div className="w-3/4 flex flex-col py-2">
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-[#111827]">
                {data?.title}
              </h3>
              <p className="text-[#6b7280] text-base hidden sm:block">
                {data?.description.slice(0, 70) + "..."}
              </p>
              <div className="text-xs sm:text-sm flex items-center gap-2  sm:mt-auto pb-1">
                <div className="w-7 h-7 hidden sm:block">
                  <img
                    className="rounded-full w-full"
                    src={
                      users?.filter((user) => user?.email === data?.email)[0]
                        ?.image
                    }
                    alt="profile"
                  />
                </div>
                <span className="text-[#374151]">
                  {
                    users?.filter((user) => user?.email === data?.email)[0]
                      ?.name
                  }
                </span>
                .
                <span className="text-[#6b7280]">
                  <TimeagoReact datetime={data?.updatedAt} />
                </span>
              </div>
            </div>
            <div className="w-2/4 h-fit sm:w-1/4 lg:w-1/3 rounded-2xl overflow-hidden">
              <img className="w-full" src={data?.imgUrl} alt="blog image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
