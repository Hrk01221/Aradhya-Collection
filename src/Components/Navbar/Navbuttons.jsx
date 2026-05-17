import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  Contact,
  Heart,
  MapPinned,
  Menu,
  MessageCircleQuestionMark,
  PhoneCall,
  ShoppingCart,
  Users,
} from "lucide-react";
import NavIcons from "./NavIcons";

const Navbuttons = () => {
  const {toggleCart} = useContext(AppContext);
  return (
    <div className="md:flex gap-6 xl:gap-8 absolute sm:relative right-2">
      <NavIcons Icon={MapPinned} text={"Track Order"} />
      <NavIcons Icon={Heart} text={"Wishlist"} fill={true} />
      <div onClick={toggleCart} className="group flex flex-col justify-center items-center relative cursor-pointer">
        <NavIcons Icon={ShoppingCart} text={"Cart"} />
        {/* count of items in cart */}
        <div className="hidden w-4 h-4 rounded-full bg-primary absolute -top-2 -right-2 md:flex justify-center items-center text-[10px] text-bg">
          10
        </div>
      </div>
      <NavIcons Icon={Users} text="Sign in" />
      <div className="hidden group sm:flex flex-col">
        <Menu
          className="transition-all duration-300 ease-in-out hover:text-primary hover:scale-125 cursor-pointer"
          size={22}
          strokeWidth={1.4}
        />
        <div className="absolute top-9 right-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-bg border border-black shadow-lg rounded mt-2 min-w-38">
          <ul className="py-2">
            <li className="px-4 py-2 cursor-pointer flex gap-4 border-b border-gray-400 transition-all duration-300 ease-in-out hover:text-primary">
              <Contact size={20} strokeWidth={1.4} />
              About Us
            </li>
            <li className="px-4 py-2 cursor-pointer flex gap-4 border-b border-gray-400 transition-all duration-300 ease-in-out hover:text-primary">
              <MessageCircleQuestionMark size={20} strokeWidth={1.4} />
              FAQ
            </li>
            <li className="px-4 py-2 cursor-pointer flex gap-4 transition-all duration-300 ease-in-out hover:text-primary">
              <PhoneCall size={20} strokeWidth={1.4} />
              Contact Us
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbuttons;

{
  /*  */
}
