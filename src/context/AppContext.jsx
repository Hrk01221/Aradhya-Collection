import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setcartOpen] = useState(false);
  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);
  }
  const toggleCart = ()=>{
    setcartOpen(!cartOpen);
  }
  return (
    <AppContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        cartOpen,
        toggleCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;