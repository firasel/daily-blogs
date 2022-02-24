import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/DashboardComponents/Sidebar/Sidebar";
import Topbar from "../components/DashboardComponents/Topbar/Topbar";

const DashboardLayout = ({ children }) => {
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
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
