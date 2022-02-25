import { AnimatePresence, motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../atoms/sidebarAtom";

const Topbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const router = useRouter();
  const [sidebarExpand, setSidebarExpand] = useRecoilState(sidebarState);
  const { data: session } = useSession({});

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{
        y: 0,
        transition: {
          type: "spring",
          duration: 0.2,
          damping: 20,
        },
      }}
      className="py-3 bg-slate-100 flex items-center justify-between relative"
    >
      <div className="pl-1 md:pl-3">
        <div
          className="text-3xl p-[6px] rounded-md bg-slate-200 cursor-pointer"
          onClick={() => setSidebarExpand(!sidebarExpand)}
        >
          {sidebarExpand ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </div>
      </div>
      <div className="pr-1 md:pr-3">
        <div
          onClick={() => setShowLogout(!showLogout)}
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer border-2 p-[3px] border-[#fe5f55]"
        >
          {session?.user?.image && (
            <img
              className="rounded-full w-full h-full"
              src={session?.user?.image}
              alt="profile img"
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {showLogout && (
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1, originY: 0 }}
            exit={{ scaleY: 0, originY: 0 }}
            className="absolute right-1 md:right-2 bg-[#fe5f55] rounded-md overflow-hidden top-full z-10"
          >
            <button
              onClick={() => {
                signOut();
                router.push("/");
              }}
              className="px-2 py-1 text-white font-semibold"
            >
              Sign out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Topbar;
