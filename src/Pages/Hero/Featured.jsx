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
    const interval = setInterval(() => {
      setfeatureIdx((prev) => (prev + 1) % imglinks.length);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [imglinks.length]);

  return (
    <div className="relative w-full h-60 sm:h-100 flex justify-center">
      <div className="w-[98%] h-full sm:h-full sm:w-[97%] lg:w-[80%] flex items-center gap-2">
        <div className="relative cursor-pointer w-full h-full xl:w-[60%] rounded-2xl overflow-hidden flex items-center justify-center">
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

        <div className="hidden xl:flex flex-col w-full lg:w-[40%] h-full gap-2">
          <div className="cursor-pointer w-full h-full">
            <img
              className="w-full h-full object-center rounded-2xl"
              src="https://i1-e.pinimg.com/1200x/7d/64/b6/7d64b6e01c7e80aaf1b6e12b43869e05.jpg"
              alt=""
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Featured;
