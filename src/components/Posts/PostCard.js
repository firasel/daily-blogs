import React from "react";
import TimeagoReact from "timeago-react";

const PostCard = ({ data, users }) => {
  return (
    <div className="transition-all duration-300 hover:scale-[1.03] cursor-pointer">
      <div className="relative w-full h-[15rem] lg:h-[15rem] xl:h-[20rem]">
        <img
          className="absolute w-full h-full object-cover rounded-md"
          src={data.imgUrl}
          alt="post img"
        />
      </div>
      <div className="mt-5">
        <h4 className="text-lg lg:text-xl">{data.title}</h4>
        <div className="text-xs sm:text-sm flex items-center gap-2 mt-5">
          <div className="w-8 h-8">
            <img
              className="rounded-full"
              src={
                users?.filter((user) => user?.email === data?.email)[0]?.image
              }
              alt="profile"
            />
          </div>
          <div className="leading-4">
            <span className="text-[#374151] font-semibold">
              {users?.filter((user) => user?.email === data?.email)[0]?.name}
            </span>
            <br />
            <span className="text-[#6b7280]">
              <TimeagoReact datetime={data.updatedAt} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
