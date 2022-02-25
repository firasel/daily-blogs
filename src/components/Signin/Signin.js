import { signIn } from "next-auth/react";
import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";

const Signin = ({ providers }) => {
  return (
    <div className="w-5/6 md:w-2/3 mx-auto my-9">
      <button
        onClick={() => signIn(providers?.google?.id, { callbackUrl: "/" })}
        className="px-2 py-3 rounded-md bg-[#fd5e55] w-full text-white font-semibold tracking-wider font-[Poppins] flex items-center justify-center gap-1 md:gap-2 text-lg md:text-xl md:hover:scale-105 transition-all duration-200"
      >
        <AiOutlineGoogle className="text-2xl md:text-3xl" />
        Sign in With Google
      </button>
    </div>
  );
};

export default Signin;
