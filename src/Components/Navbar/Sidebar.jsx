import React, { useContext } from "react";
import { ChevronRight, Contact, Heart, MapPinned, MessageCircleQuestionMark, PhoneCall, User } from "lucide-react";
import { AppContext } from "/src/context/AppContext";

const Sidebar = () => {
  const { menuOpen, toggleMenu } = useContext(AppContext);
  return (
    <div
      className={`z-50 fixed top-36 left-0 w-[80%] h-[calc(100vh-5.5rem)] bg-bg shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        flex flex-col items-center py-4 px-2 gap-5 overflow-y-auto`}
    >
      {/* Sign in button */}
      <div className="w-full rounded-2xl border bg-bg border-gray-200 shadow-2xs flex items-center p-4 gap-4">
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-primary opacity-80">
          <User strokeWidth={2} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-bold">Sign In / Register</div>
          <div className="opacity-50 text-[10px]">
            Join Aradhya Collections Today
          </div>
        </div>
        <ChevronRight strokeWidth={1.2} size={20} />
      </div>
      
      {/* Tag */}
      <div className="w-full h-4 opacity-50 relative flex justify-center">
        <div className="text-[10px] absolute left-0">Shopping Actions</div>
      </div>
      
      {/* Shop actions buttons */}
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex px-4 py-2 gap-4 items-center border rounded-md">
          <MapPinned size={20} strokeWidth={1.2} />
          <div className="text-[14px] opacity-80">Track Your Order</div>
        </div>
        <div className="w-full flex px-4 py-2 gap-4 items-center border rounded-md">
          <Heart
            className="fill-primary text-primary"
            size={20}
            strokeWidth={1.2}
          />
          <div className="text-[14px] opacity-80">Wishlist</div>
        </div>
      </div>

      {/* Tag */}
      <div className="w-full h-5 opacity-50 relative flex justify-center">
        <div className="text-[10px] absolute left-0">Products</div>
      </div>

      {/* Product lists */}
      <div className="w-full border-primary flex flex-col gap-2">
        <div className="py-1 text-[14px] opacity-70 border-b border-b-slate-400"> All Categories</div>
        <div className="py-1 text-[14px] opacity-70 border-b border-b-slate-400"> Food</div>
        <div className="py-1 text-[14px] opacity-70 border-b border-b-slate-400"> Cosmetics</div>
        <div className="py-1 text-[14px] opacity-70 border-b border-b-slate-400"> Bracelets</div>
        <div className="py-1 text-[14px] opacity-70 border-b border-b-slate-400"> Chains</div>
        <div className="py-1 text-[14px] opacity-70 border-b border-b-slate-400"> Statues</div>
      </div>

      {/* Tag */}
      <div className="w-full h-5 opacity-50 relative flex justify-center">
        <div className="text-[10px] absolute left-0">Support</div>
      </div>

      {/* Support Buttons */}
      <div className="w-full flex flex-col gap-2 mt-3 mb-25">
        <div className="w-full flex px-4 py-2 gap-4 items-center border border-primary rounded-xl">
          <Contact size={20} strokeWidth={1.2} />
          <div className="text-[14px] opacity-80">About Us</div>
        </div>
        <div className="w-full flex px-4 py-2 gap-4 items-center border border-primary rounded-xl">
          <MessageCircleQuestionMark
            size={20}
            strokeWidth={1.2}
          />
          <div className="text-[14px] opacity-80">FAQ</div>
        </div>
        <div className="w-full flex px-4 py-2 gap-4 items-center border border-primary rounded-xl">
          <PhoneCall
            size={20}
            strokeWidth={1.2}
          />
          <div className="text-[14px] opacity-80">Contact US</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
