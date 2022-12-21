import React from "react";

const RightNav = ({ openMenu }) => {
  return (
    <div className="cursor-pointer md:hidden mr-2" onClick={openMenu}>
      <div className="border-solid border border-black w-4 mb-1.5"></div>
      <div className="border-solid border border-black w-7 mb-1.5"></div>
      <div className="border-solid border border-black w-4 mb-1.5"></div>
    </div>
  );
};

export default RightNav;
