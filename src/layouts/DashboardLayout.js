import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms/sidebarAtom";
import Sidebar from "../components/DashboardComponents/Sidebar/Sidebar";
import Topbar from "../components/DashboardComponents/Topbar/Topbar";
import useWindowSize from "../helper/useWindowSize";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [showContent, setShowContent] = useState(true);
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });
  const [sidebarExpand] = useRecoilState(sidebarState);
  const windowSize = useWindowSize();

  // Sidebar state control
  useEffect(() => {
    if (windowSize?.width > 667) {
      setShowContent(true);
    } else if (windowSize?.width < 668 && !sidebarExpand) {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
  }, [windowSize, sidebarExpand]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex font-[Poppins]">
        <ToastContainer />
        <Sidebar />
        <div className="w-full">
          <Topbar />
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
