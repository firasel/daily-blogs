import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdPostAdd } from "react-icons/md";
import { RiDraftFill, RiFileListFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../atoms/sidebarAtom";
import useWindowSize from "../../../helper/useWindowSize";

const Sidebar = () => {
  const router = useRouter();
  const [sidebarExpand, setSidebarExpand] = useRecoilState(sidebarState);
  console.log(sidebarExpand);

  const windowSize = useWindowSize();

  // Sidebar state control
  useEffect(() => {
    if (windowSize?.width < 668) {
      setSidebarExpand(true);
    } else {
      setSidebarExpand(false);
    }
  }, [windowSize]);

  // Sidebar menus data
  const sidebarMenus = [
    {
      name: "Home",
      path: "/dashboard",
      icon: <AiFillHome />,
    },
    {
      name: "Posts",
      path: "/dashboard/posts",
      icon: <RiFileListFill />,
    },
    {
      name: "Create Post",
      path: "/dashboard/newpost",
      icon: <MdPostAdd />,
    },
    {
      name: "Draft",
      path: "/dashboard/draft",
      icon: <RiDraftFill />,
    },
  ];

  const variants = {
    sidebarDefault: {
      width: "16rem",
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 13,
      },
    },
    sidebarMobile: {
      width: "4rem",
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 13,
      },
    },
    show: {
      display: "block",
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.3,
      },
    },
    hide: {
      scaleX: 0,
      originX: 0,
      display: "none",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <motion.div
        variants={variants}
        initial="sidebarMobile"
        animate={sidebarExpand ? "sidebarMobile" : "sidebarDefault"}
        className="w-64 sticky top-0 !min-h-screen bg-slate-200"
      >
        <div className="w-fit mx-auto py-2">
          <div className="flex items-start gap-1">
            <span
              className={`text-[2rem] text-[#fe5f55] font-semibold italic ${
                sidebarExpand ? "!text-[2.1rem]" : "md:text-3xl"
              }`}
            >
              D
            </span>
            <div
              className={`font-semibold text-lg text-[#0d0d18] whitespace-nowrap leading-5 mt-[10px] ${
                sidebarExpand && "hidden"
              }`}
            >
              aily
              <br />
              Blogs
            </div>
          </div>
        </div>
        <div className="mt-[0.38rem]">
          {sidebarMenus?.map((data, index) => (
            <div
              key={index}
              className={`w-full pl-5 pr-1 py-3 font-semibold flex gap-1 text-lg items-center hover:text-[#fe5f55] transition-all duration-200 cursor-pointer hover:bg-slate-50 
              ${sidebarExpand ? "pl-5" : "md:pl-5 xl:pl-7"}
              ${router.pathname === data.path && "bg-slate-50 text-[#fe5f55]"}`}
              onClick={() => router.push(data?.path)}
            >
              <div className="text-2xl">{data.icon}</div>
              <motion.span
                variants={variants}
                animate={sidebarExpand ? "hide" : "show"}
                className="pt-1"
              >
                {data?.name}
              </motion.span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
