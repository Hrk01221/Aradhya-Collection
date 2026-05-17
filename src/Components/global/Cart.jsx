import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { X } from "lucide-react";

const Cart = () => {
  const {cartOpen , toggleCart} = useContext(AppContext);
  return (
    <div className={`top-6 right-0 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] h-[calc(100vh-24px)] bg-fadebg shadow-2xl z-50 flex justify-center items-center fixed transform transition-transform duration-300 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
      <X onClick={toggleCart} className="absolute top-5 left-5 text-primary cursor-pointer transition-all duration-500 ease-in-out hover:scale-120"/>
      <div className="w-[60%] h-1/2 flex flex-col items-center">
        <img className="w-full h-full" src="/sad_cart.png" alt="" />
        <div className="opacity-70">Your Cart is empty</div>
      </div>
    </div>
  );
};

export default Cart;
