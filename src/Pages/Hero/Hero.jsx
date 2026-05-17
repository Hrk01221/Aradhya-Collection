import React, { useContext } from "react";
import Navbar from "/src/Components/Navbar/Navbar";
import Sidebar from "/src/Components/Navbar/Sidebar";
import Featured from "./Featured";
import Benefits from "./Benefits";
import {AppContext} from "/src/context/AppContext"
const Hero = () => {

  const {menuOpen} = useContext(AppContext);
  return (
    <div className="relative w-screen bg-bg flex flex-col gap-2">
      <div className="w-full h-40 sm:h-42 "></div>
      <Navbar />
      {menuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"></div>
      )}
      <Sidebar />
      <Featured />
      <Benefits />
    </div>
  );
};

export default Hero;
