"use client"

import { LogIn } from "lucide-react";
import React from "react";

const LogInButton = () => {
  return (
    <button
      className="bg-[#5044E5] hover:bg-[#5044E5]/90 hover:scale hover:scale-103 cursor-pointer text-white py-2 px-5 rounded-4xl flex items-center transition duration-300 ease-in-out"
      // onClick={}
    >
      <LogIn className="inline-block" size={15} />
      <span className="ml-1">Log In</span>
    </button>
  );
};

export default LogInButton;
