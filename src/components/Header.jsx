import React from "react";
import Netflix_Logo from "../assets/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10">
      <img className="w-44 " src={Netflix_Logo} alt="logo"></img>
    </div>
  );
};

export default Header;
