import React from "react";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <div className="nav">
      <NavButton name="Home" path="/" />
      <NavButton name="About" path="/" />
      <NavButton name="Resume" path="/" />
    </div>
  );
};

export default Nav;
