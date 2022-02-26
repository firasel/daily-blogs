import { useRouter } from "next/router";
import React from "react";
import TimeagoReact from "timeago-react";

const TopPost = ({ headerPosts }) => {
  const { posts, users } = headerPosts;
  const allPosts = posts?.slice(4, 8);
  const router = useRouter();

  return (
    <div className="mt-10 font-[Poppins]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-5">Top Post</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {allPosts?.map((data, index) => (
          <div
            key={index}
            onClick={()=>router.push(`/post/${data._id}`)}
            className="relative w-full cursor-pointer rounded-tr-3xl rounded-bl-3xl overflow-hidden bg-gray-200 hover:scale-[1.02] transition-all duration-200 grid"
          >
            <div className="relative w-full h-[15rem] lg:h-[15rem] xl:h-[20rem]">
              <img
                className="absolute w-full h-full object-cover rounded-md"
                src={data?.imgUrl}
                alt="post img"
              />
            </div>
            <div className="w-full flex items-end px-2 py-2">
              <div className="w-full">
                <h4 className="text-lg font-semibold">{data?.title}</h4>
                <div className="w-full flex gap-2 mt-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={
                        users?.filter((user) => user?.email === data?.email)[0]
                          ?.image
                      }
                      alt="author img"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">
                      {
                        users?.filter((user) => user?.email === data?.email)[0]
                          ?.name
                      }
                    </h4>
                    <p>
                      <TimeagoReact datetime={data?.updatedAt} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPost;
