import React from "react";

interface NavButtonProps {
  name: string;
  path: string;
}

const NavButton = (props: NavButtonProps) => {
  const { name, path } = props;
  return (
    <div className="nav-button">
      <a href={path}>{name}</a>
    </div>
  );
};

export default NavButton;
