import React from "react";

const Header = ({ heading }) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold capitalize">{heading}</h1>
    </div>
  );
};

export default Header;
