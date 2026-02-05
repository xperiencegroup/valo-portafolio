import { useState } from "react";
import { AppContext } from "./AppContext.jsx";

const SPLASH_KEY = "showSplashScreen";

export function AppContextProvider({ children }) {
  const [showSplashScreen, setShowSplashScreen] = useState(() => {
    const storedValue = sessionStorage.getItem(SPLASH_KEY);
    if (storedValue === null) {
      sessionStorage.setItem(SPLASH_KEY, "true");
      return true;
    }
    return storedValue === "true";
  });

  const toggleSplashScreen = () => {
    const showSplash = sessionStorage.getItem(SPLASH_KEY);

    if (showSplash === "true") {
      sessionStorage.setItem(SPLASH_KEY, "false");
      setShowSplashScreen(false);
    }

    if (showSplash === "false") {
      sessionStorage.setItem(SPLASH_KEY, "true");
      setShowSplashScreen(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        showSplashScreen,
        toggleSplashScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
