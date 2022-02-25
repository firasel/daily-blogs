import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { VscSearch } from "react-icons/vsc";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const { data: session } = useSession({});

  const variants = {
    show: {
      height: "auto",
      opacity: 1,
    },
    hide: {
      height: 0,
      opacity: 0,
    },
  };

  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-4 md:gap-2 lg:gap-12 xl:gap-16">
          <div className="flex items-start">
            <span className="text-[2rem] md:text-4xl text-[#fe5f55] font-semibold italic">
              D
            </span>
            <div className="font-semibold text-lg md:text-xl text-[#0d0d18] whitespace-nowrap leading-5 mt-4">
              aily
              <br />
              Blogs
            </div>
          </div>
          <div className="hidden md:flex gap-2 lg:gap-5 sm:text-base lg:text-lg">
            <Link href="/" passHref>
              <span className="active linkHover">Home</span>
            </Link>
            <Link href="/Post" passHref>
              <span className=" linkHover">Post</span>
            </Link>
            <Link href="/about" passHref>
              <span className=" linkHover">About</span>
            </Link>
            <Link href="/contact" passHref>
              <span className=" linkHover">Contact</span>
            </Link>
            {session && (
              <Link href="/dashboard" passHref>
                <span className=" linkHover">Dashboard</span>
              </Link>
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="p-3 rounded-full text-2xl hover:bg-slate-100">
            <VscSearch />
          </div>
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-[#fe5f55] text-white px-4 md:px-3 lg:px-5 py-2 rounded-full font-semibold text-lg md:text-base lg:text-lg"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => setModalOpen(!modalOpen)}
              className="bg-[#fe5f55] text-white px-4 md:px-3 lg:px-5 py-2 rounded-full font-semibold text-lg md:text-base lg:text-lg"
            >
              Sign in
            </button>
          )}
        </div>
        <div className="flex md:hidden items-center gap-1">
          <div className="p-3 rounded-full text-2xl hover:bg-slate-100">
            <VscSearch />
          </div>
          <div
            className="text-3xl hover:bg-slate-100 p-2 rounded-md"
            onClick={() => setExpand(!expand)}
          >
            <CgMenuRight />
          </div>
        </div>
      </div>
      <motion.div
        variants={variants}
        initial="hide"
        animate={expand ? "show" : "hide"}
        className="block md:hidden text-lg mt-1 bg-slate-50 rounded-b-lg overflow-hidden"
      >
        <Link href="/" passHref>
          <h4 className="active linkHoverMobile">Home</h4>
        </Link>
        <Link href="/Post" passHref>
          <h4 className="linkHoverMobile">Post</h4>
        </Link>
        <Link href="/about" passHref>
          <h4 className="linkHoverMobile">About</h4>
        </Link>
        <Link href="/contact" passHref>
          <h4 className="linkHoverMobile">Contact</h4>
        </Link>
        {session && (
          <Link href="/dashboard" passHref>
            <h4 className="linkHoverMobile">Dashboard</h4>
          </Link>
        )}
        {session ? (
          <button
            onClick={() => signOut()}
            className="bg-[#fe5f55] text-white px-5 py-2 font-semibold text-lg w-full"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="bg-[#fe5f55] text-white px-5 py-2 font-semibold text-lg w-full"
          >
            Sign in
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
