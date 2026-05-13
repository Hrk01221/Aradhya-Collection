import React from "react";

const Popupnav = () => {
  return (
    <div className="w-full h-6 text-[12px] px-2 bg-secondary text-white flex lg:justify-center">
      <div className="w-full h-full flex justify-center items-center opacity-80 md:justify-between lg:w-[80%]">
        <div className="">Welcome to Aradhya Collection</div>
        <div className="hidden gap-5 md:flex">
          <div>Help Line +88019069-53072</div>
          <div>|</div>
          <div>COD Available</div>
        </div>
      </div>
    </div>
  );
};

export default Popupnav;
