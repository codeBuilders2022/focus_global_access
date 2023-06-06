import React, { createContext, useState, useContext, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("light");
  const [theme, setTheme] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false)
  
  const handleTheme = () => {
    document.body.classList.toggle("dark");
    
    if(document.body.classList.contains("dark")){
      localStorage.setItem("theme", "dark")
      setTheme(true)
    }
    else{
      localStorage.setItem("theme", "light")
      setTheme(false)
    }
  };

  

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
       handleTheme,
       currentMode,
       setCurrentMode,
       theme,
       setTheme,
       openSidebar,
       setOpenSidebar
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
