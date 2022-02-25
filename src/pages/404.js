import React from "react";
import SimpleLayout from "../layouts/SimpleLayout";

const NotFound = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4 justify-center text-2xl md:text-3xl min-h-screen">
      <span className="font-bold text-3xl md:text-4xl">404</span>|
      <span>This page could not be found.</span>
    </div>
  );
};

NotFound.Layout = SimpleLayout;

export default NotFound;
