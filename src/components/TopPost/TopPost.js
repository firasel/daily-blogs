import React from "react";
import TimeagoReact from "timeago-react";

const TopPost = ({ headerPosts }) => {
  const { posts, users } = headerPosts;
  const allPosts = posts?.slice(4, 8);
  console.log(allPosts);

  return (
    <div className="mt-10 font-[Poppins]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-5">Top Post</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {allPosts.map((data, index) => (
          <div
            key={index}
            className="relative w-full cursor-pointer rounded-tr-3xl rounded-bl-3xl overflow-hidden bg-gray-200 hover:scale-[1.02] transition-all duration-200 grid"
          >
            <div className="w-full h-auto overflow-hidden">
              <img
                className="w-full"
                src={data?.imgUrl}
                alt="blog cover image"
              />
            </div>
            <div className="max-h-fit mx-auto w-full px-2 py-2">
              <h4 className="text-lg font-semibold">{data?.title}</h4>
              <div className="flex gap-2 mt-2">
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
        ))}
      </div>
    </div>
  );
};

export default TopPost;
