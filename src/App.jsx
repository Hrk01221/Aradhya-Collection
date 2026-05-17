import React from "react";
import Hero from "./Pages/Hero/Hero";
import Cart from "./Components/global/Cart";

const App = () => {
  return (
    <div className="relative w-screen h-screen">
        <Hero />
        <Cart/>
    </div>
  );
};

export default App;
