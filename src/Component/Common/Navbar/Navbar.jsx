import clsx from "clsx";
import React, { useState } from "react";
import RightNav from "../Rightnav/RightNav";

const Navbar = ({ afterScroll }) => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="container w-full flex justify-between">
      <nav className=" w-full text-center lg:text-start flex-col lg:flex-row flex items-center absolute justify-between sticky">
        <div className="flex justify-around">
          <a
            href="index.html"
            className={clsx(
              "text-3xl uppercase pt-2.5 lg:pt-0  font-sans font-extrabold text-center lg:text-start",
              {
                "text-black": afterScroll,
                "text-white": !afterScroll,
              }
            )}
          >
            GYM<em className="text-red-500 not-italic"> Management</em>
          </a>
          <RightNav openMenu={openMenu} />
        </div>
        <ul
          className={clsx(
            "h-full lg:flex w-full lg:w-1/2 items-center justify-evenly divide-y divide-solid divide-slate-200 lg:divide-none px-10",
            {
              "text-black": afterScroll,
              "text-white": !afterScroll,
              "hidden lg:block": !menu,
            }
          )}
        >
          <li className="text-sm font-sans hover:text-red-500 focus:text-red-500 py-3.5 lg:py-0">
            <a href="#home" className="active">
              HOME
            </a>
          </li>
          <li className="text-sm font-sans hover:text-red-500 focus:text-red-500 py-3.5 lg:py-0">
            <a href="#features">ABOUT</a>
          </li>
          <li className="text-sm font-sans hover:text-red-500 focus:text-red-500 py-3.5 lg:py-0">
            <a href="#classes">CLASSES</a>
          </li>
          <li className="text-sm font-sans hover:text-red-500 focus:text-red-500 py-3.5 lg:py-0">
            <a href="#schedule">SCHEDULES</a>
          </li>
          <li className="text-sm font-sans hover:text-red-500 focus:text-red-500 py-3.5 lg:py-0">
            <a href="#contact-us">CONTACT</a>
          </li>
          <li className="px-3 py-1.5 text-white bg-red-500 cursor-pointer text-sm font-sans ">
            Sign Up
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
