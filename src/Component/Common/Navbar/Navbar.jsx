import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around w-2/3 ">
      <a
        href="index.html"
        className="text-3xl uppercase  font-sans font-extrabold"
      >
        GYM<em className="text-red-500 not-italic"> Management</em>
      </a>

      <ul className=" h-full flex w-1/2 items-center justify-evenly">
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
