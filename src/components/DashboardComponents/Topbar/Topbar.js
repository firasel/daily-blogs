import Image from "next/image";
import React from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useRecoilState } from "recoil";
import ProfileImg from "../../../assets/images/profile1.jpg";
import { sidebarState } from "../../../atoms/sidebarAtom";

const Topbar = () => {
  const [sidebarExpand, setSidebarExpand] = useRecoilState(sidebarState);

  return (
    <div className="py-3 bg-slate-100 flex items-center justify-between">
      <div className="pl-1 md:pl-3">
        <div
          className="text-3xl p-[6px] rounded-md bg-slate-200 cursor-pointer"
          onClick={() => setSidebarExpand(!sidebarExpand)}
        >
          {sidebarExpand ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </div>
      </div>
      <div className="pr-1 md:pr-3">
        <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer border-2 p-[3px] border-[#fe5f55]">
          <Image
            layout="responsive"
            className="rounded-full"
            src={ProfileImg}
            alt="profile img"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
