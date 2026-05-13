import React from "react";
import { Search, X } from 'lucide-react'
const Searchbar = () => {
  return (
    <div className="hidden group w-[60%] h-8 box-border relative sm:flex justify-center items-center">
      <input
        className="peer w-full h-full box-border pl-8 border border-gray-400 rounded-[10px] transition-all duration-200 ease-in-out text-gray-500 focus:outline-primary"
        type="search"
        placeholder="Search for products , brands & more..."
      />
      <Search className="cursor-pointer absolute left-2 w-5 h-5 text-gray-400" />
      <X className="cursor-pointer invisible opacity-0 peer-focus:visible peer-focus:opacity-100 absolute right-2 w-5 h-5 text-gray-400" />
    </div>
  );
};

export default Searchbar;
