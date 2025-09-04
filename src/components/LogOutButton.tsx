"use client";

import { LogOut } from "lucide-react";
import React from "react";

const LogOutButton = () => {
  return (
    <button
      className="bg-[#5044E5] gap-1 hover:bg-[#5044E5]/90 hover:scale hover:scale-103 cursor-pointer text-white py-2 px-5 rounded-4xl flex items-center transition duration-300 ease-in-out"
    //   onClick={}
    >
      <span className="text-sm">Log Out</span>
      <LogOut className="inline-block" size={14} />
    </button>
  );
};

export default LogOutButton;
