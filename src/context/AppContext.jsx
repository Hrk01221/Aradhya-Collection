import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <AppContext.Provider
      value={{
        menuOpen,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;