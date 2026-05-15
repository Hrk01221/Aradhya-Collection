import React from "react";
import { Banknote, Headset, RotateCcw, Truck } from "lucide-react";
import BenifitIcons from "./BenifitIcons";

const Benefits = () => {
  return (
    <div className="w-full flex justify-center items-center mt-5 mb-5">
      <div className="w-[98%] lg:w-[80%] grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-slate-400">
        <BenifitIcons keyP={1} Icon={Truck} tittle="Free Shipping" desc ="Orders upto 300tk"/>
        <BenifitIcons keyP={2}  Icon={Banknote} tittle="Cash on delivery" desc ="Pay when recieve"/>
        <BenifitIcons keyP={3} Icon={RotateCcw} tittle="Easy Returns" desc ="7-days return policy"/>
        <BenifitIcons keyP={4} Icon={Headset} tittle="24/7 Supported" desc ="Service when need"/>
      </div>
    </div>
  );
};

export default Benefits;
