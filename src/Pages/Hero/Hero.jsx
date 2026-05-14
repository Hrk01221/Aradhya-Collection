import React from "react";
import Navbar from "/src/Components/Navbar/Navbar";
import Sidebar from "/src/Components/Navbar/Sidebar";
import Featured from "./Featured";

const Hero = () => {
  return (
    <div className="relative w-screen h-[300vh] bg-bg flex flex-col">
      <Navbar />
      <Sidebar />
      <Featured/>
    </div>
  );
};

export default Hero;
