import React from "react";

const BenifitIcons = ({keyP, Icon, tittle, desc }) => {
  console.log(keyP);
  
  return (
    <div className={`border-r ${keyP-1<2 ? "border-b lg:border-b-0":""} ${keyP%2==0 ? "border-r-0":""} ${keyP==2 ? "lg:border-r" : ""} border-slate-400 flex justify-center items-center p-4 gap-4
    `}>
      <div className="w-10 h-10 rounded-lg bg-[#FEB9D2] flex justify-center items-center">
        <Icon className="text-primary" strokeWidth={1.4} />
      </div>
      <div className="flex flex-col">
        <div className="text-[14px] font-medium">{tittle}</div>
        <div className="text-[10px] opacity-50">{desc}</div>
      </div>
    </div>
  );
};

export default BenifitIcons;
