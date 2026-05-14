import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "/src/context/AppContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Featured = () => {

  const { menuOpen, toggleMenu } = useContext(AppContext);
  const [featureIdx, setfeatureIdx] = useState(0);
  const imglinks = ["/f1.png", "/f2.png", "/f3.png"];

  const goright = () => {
    setfeatureIdx((prev) => (prev + 1) % imglinks.length);
  };

  const goleft = () => {
    setfeatureIdx((prev) => (prev - 1 + imglinks.length) % imglinks.length);
  };

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
    <div className="top-40 sm:top-45 relative w-full h-175 flex justify-center">
      <div className="w-[90%] h-[35%] sm:w-[97%] lg:w-[80%] sm:h-[90%] flex items-center gap-2">

        <div className=" cursor-pointer w-full lg:w-[60%] h-full relative rounded-2xl overflow-hidden flex items-center justify-center">
          {imglinks.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="featured images"
              className={`absolute top-0 left-0 w-full h-full object-center transition-opacity duration-700 ease-in-out
              ${idx === featureIdx ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <ChevronRight
            onClick={goright}
            className="absolute right-0 text-white sm:w-8 sm:h-8 cursor-pointer transition-all duration-500 ease-in-out hover:scale-120"
          />
          <ChevronLeft
            onClick={goleft}
            className="absolute left-0 text-white sm:w-8 sm:h-8 cursor-pointer transition-all duration-500 ease-in-out hover:scale-120"
          />
          <div className="flex absolute bottom-4 gap-2">
            {imglinks.map((src, idx) => {
              return (
                <div
                  key={idx}
                  className={`bg-bg w-2 h-2 rounded-2xl transition-all duration-300 ${featureIdx == idx ? "bg-white w-6" : "bg-white/40"}`}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-full lg:w-[40%] h-full gap-2">
          <div className="cursor-pointer w-full h-1/2">
            <img
              className="w-full h-full object-center rounded-2xl"
              src="https://i.pinimg.com/1200x/6f/64/b9/6f64b90146395ccec2700f03bc168d97.jpg"
              alt=""
            />
            <img
              className="w-full h-full object-center rounded-2xl"
              src="https://i.pinimg.com/1200x/2a/4f/d4/2a4fd4bb660e9e77761cf90123f2692e.jpg"
              alt=""
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Featured;
