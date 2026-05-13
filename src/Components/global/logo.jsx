import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center px-2 lg:px-2">
      <div className="w-10 h-10">
        <img
          className="h-full w-full object-contain"
          src="/src/assets/tplogo.png"
          alt="logo"
        />
      </div>
      <div className="flex flex-col items-center pt-4 pb-4">
        <div className="font-thurkle text-1xl text-primary">Aradhya</div>
        <div className="font-cintarini text-[10px] text-primary">
          Collection
        </div>
      </div>
    </div>
  );
};

export default Logo;
