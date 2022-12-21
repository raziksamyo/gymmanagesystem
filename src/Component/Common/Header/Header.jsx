import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [afterScroll, setAfterScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setAfterScroll(window.pageYOffset > 500)
      );
    }
  }, []);

  return (
    <div
      className={clsx(
        "transition-all drop-shadow-lg duration-1000 h-auto py-5 lg:py-0 lg:h-20 w-full flex justify-center items-center fixed top-0 z-50",
        {
          "bg-white text-black": afterScroll,
          "bg-gray-700 bg-opacity-50": !afterScroll,
        }
      )}
    >
      <Navbar afterScroll={afterScroll} />
    </div>
  );
};

export default Header;
