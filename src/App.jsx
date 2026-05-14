import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import { AppContext } from "/src/context/AppContext";

const App = () => {
  const { menuOpen, toggleMenu } = useContext(AppContext);
  const [featureIdx, setfeatureIdx] = useState(0);
  const imglinks = [
    "/f1.png",
    "/f2.png",
    "/f3.png",
  ];
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const interval = setInterval(() => {
      setfeatureIdx((prev) => (prev + 1) % imglinks.length);
    }, 10000);
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, imglinks.length]);

  return (
    <div className="relative w-screen h-[900vh] bg-bg flex flex-col">
      <Navbar />
      <Sidebar />
      <div className="top-40 sm:top-45 relative w-full h-[8%] flex justify-center">
        <div className="w-[90%] h-[50%] sm:w-[97%] lg:w-[80%] sm:h-[90%] bg-red-900 rounded-2xl overflow-hidden relative">
          {imglinks.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt=""
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
              ${idx === featureIdx ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
