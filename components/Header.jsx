import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      {/* leftside menu  */}
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      {/* rightside menu  */}
      <div className="flex gap-2 items-center">
        <DarkMode />
        <Link href={"/"} className="text-2xl font-bold flex gap-1 items-center">
          <RiMovie2Line className="text-amber-400 text-3xl font-semibold" />
          <p>
            <span className="">watc</span>
            <span className="text-amber-400">Ho</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
