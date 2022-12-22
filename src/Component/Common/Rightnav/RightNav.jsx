import Hamburger from "hamburger-react";
import React from "react";

const RightNav = ({ openMenu }) => {
  return (
    <div className="cursor-pointer pt-2 lg:hidden mr-2" onClick={openMenu}>
      <Hamburger duration={0.5} />
    </div>
  );
};

export default RightNav;
