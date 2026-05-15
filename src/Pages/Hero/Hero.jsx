import React from "react";
import Navbar from "/src/Components/Navbar/Navbar";
import Sidebar from "/src/Components/Navbar/Sidebar";
import Featured from "./Featured";
import Benefits from "./Benefits";

const Hero = () => {
  return (
    <div className="relative w-screen bg-bg flex flex-col gap-2">
      <div className="w-full h-40 sm:h-42 "></div>
      <Navbar />
      <Sidebar />
      <Featured />
      <Benefits/>
    </div>
  );
};

export default Hero;
