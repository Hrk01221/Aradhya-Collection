import React, { useContext, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import { AppContext } from "/src/context/AppContext";

const App = () => {
  const { menuOpen, toggleMenu } = useContext(AppContext);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="w-screen h-[900vh] bg-bg flex flex-col">
      <Navbar />
      <Sidebar/>
    </div>
  );
};

export default App;
