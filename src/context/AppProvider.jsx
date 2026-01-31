import { useState } from "react";
import { AppContext } from "./AppContext.jsx";

export function AppContextProvider({ children }) {
  // const [activeMenu, setActiveMenu] = useState("");
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  return (
    <AppContext.Provider
      value={{
        menu: "home",
        submenu: "submenu",
        altview: "altview",
        showSplashScreen,
        setShowSplashScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
