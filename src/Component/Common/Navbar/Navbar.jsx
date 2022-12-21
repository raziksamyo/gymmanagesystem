import clsx from "clsx";
import React from "react";

const Navbar = ({ afterScroll }) => {
  return (
    <div className="container">
      <nav className="flex items-center absolute justify-between sticky">
        <a
          href="index.html"
          className={clsx("text-3xl uppercase  font-sans font-extrabold", {
            "text-black": afterScroll,
            "text-white": !afterScroll,
          })}
        >
          GYM<em className="text-red-500 not-italic"> Management</em>
        </a>

        <ul
          className={clsx(" h-full flex w-1/2 items-center justify-evenly", {
            "text-black": afterScroll,
            "text-white": !afterScroll,
          })}
        >
          <li className="text-sm font-sans">
            <a href="#home" className="active">
              HOME
            </a>
          </li>
          <li className="text-sm font-sans">
            <a href="#features">ABOUT</a>
          </li>
          <li className="text-sm font-sans">
            <a href="#classes">CLASSES</a>
          </li>
          <li className="text-sm font-sans">
            <a href="#schedule">SCHEDULES</a>
          </li>
          <li className="text-sm font-sans">
            <a href="#contact-us">CONTACT</a>
          </li>
          <li className="px-3 py-1.5 text-white bg-red-500 cursor-pointer text-sm font-sans">
            Sign Up
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
