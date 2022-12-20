import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 500)
      );
    }
  }, []);

  return (
    <div
      className={clsx(
        "transition-transform h-20 w-full flex justify-center sticky top-0 z-50",
        {
          "bg-white text-black": small,
          "bg-gray-600 bg-opacity-20": !small,
        }
      )}
    >
      <Navbar afterScroll={small} />
    </div>
  );
};

export default Header;
