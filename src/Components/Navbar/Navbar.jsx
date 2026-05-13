import React from "react";
import Logo from "../global/logo";
import { ChevronDown, Menu, ShoppingCart } from "lucide-react";
import Popupnav from "./Popupnav";
import Navbuttons from "./Navbuttons";
import Searchbar from "../global/searchbar";
const Navbar = () => {
  const static_types_items = [
    "Food",
    "Cosmetics",
    "Bracelets",
    "Chains",
    "Statues",
  ];
  return (
    <div className="w-screen box-border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] flex flex-col gap-4 pb-1.5 items-center bg-bg fixed">
      <Popupnav />
      <div className="w-full h-10 flex items-center gap-40 relative lg:w-[80%]">
        <div className="relative w-full pr-2 md:w-[70%] h-full flex items-center justify-center sm:justify-between">
          <Logo />
          <Searchbar />
          <Menu
            className="absolute sm:hidden left-3"
            size={22}
            strokeWidth={1.4}
          />
          <div className="absolute flex flex-col justify-center items-center sm:hidden right-3">
            <ShoppingCart
            className="scale-x-[-1]"
              
              size={22}
              strokeWidth={1.4}
            />
            {/* count of items in cart */}
            <div className="w-4 h-4 rounded-full bg-primary absolute -top-1.5 -right-1.5 flex justify-center items-center text-[10px] text-bg ">
              10
            </div>
          </div>
        </div>
        <Navbuttons />
      </div>
      {/* <div className="w-[80%] flex items-center gap-8">
          <div className="cursor-pointer hover:opacity-100 opacity-85 flex gap-1 border border-primary rounded-md w-34 justify-center items-center p-1 bg-primary text-bg whitespace-nowrap">
            <Menu size={16} strokeWidth={2}/>
            <div className="text-[14px]">All Categories</div>
            <ChevronDown size={16} strokeWidth={2}/>
          </div>
          {static_types_items.map((val)=>{
            return <div className="text-gray-600 px-4 py-1 border border-bg rounded-xl cursor-pointer hover:border hover:bg-[#FFE6EA] transition-all duration-200 ease-linear">{val}</div>
          })}
      </div> */}
    </div>
  );
};

export default Navbar;
