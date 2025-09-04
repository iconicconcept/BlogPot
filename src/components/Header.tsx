import Image from "next/image";
import React from "react";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

const Header = () => {
  const { user } = true;

  return (
    <header className="max-w-500 px-4 md:px-10 lg:px-18 py-7">
      <div className="flex items-center justify-between bg-white">
        <Image src={"/qlogo.svg"} alt="logo" height={"70"} width={"150"} />
        {user && (
        <div className="flex gap-1">
            <h1 className="bg-[#5044E5] ">OB</h1>
        </div>
        )}

        {user ? <LogInButton /> : <LogOutButton />}
      </div>
    </header>
  );
};

export default Header;
