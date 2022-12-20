import clsx from "clsx";
import React from "react";

const Navbar = ({ afterScroll }) => {
  return (
    <nav className="flex items-center absolute justify-around w-2/3 sticky">
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
          <a href="#top" className="active">
            Home
          </a>
        </li>
        <li className="text-sm font-sans">
          <a href="#features">About</a>
        </li>
        <li className="text-sm font-sans">
          <a href="#our-classNames">class</a>
        </li>
        <li className="text-sm font-sans">
          <a href="#schedule">Schedules</a>
        </li>
        <li className="text-sm font-sans">
          <a href="#contact-us">Contact</a>
        </li>
        <li className=" px-3 py-1.5 text-white bg-red-500 cursor-pointer text-sm font-sans">
          Sign Up
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
