import React from "react";

const NavIcons = ({ Icon, text, fill=false}) => {
  
  return(
    <div className="hidden relative group md:flex flex-col justify-center items-center">
        <Icon
          className={`${fill ? "fill-primary text-primary" : ""} transition-all duration-300 ease-in-out hover:text-primary hover:scale-125 cursor-pointer`}
          size={22}
          strokeWidth={1.4}
        />
        <div className={`absolute top-5 invisible opacity-0 group-hover:opacity-70 group-hover:visible transition-all duration-300 p-2 cursor-pointer whitespace-nowrap ${fill ? "text-primary" : ""}`}>
          {text}
        </div>
    </div>
  );
};

export default NavIcons;
