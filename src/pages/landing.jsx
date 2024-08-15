import React, { useEffect, useState } from "react";
import Pricing from "../components/Pricing.Jsx";
import ThemeController from "../components/ThemeController";

const Landing = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
      });
    
      console.log(theme);
      
    
      const handleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
    
        localStorage.setItem("theme", newTheme);
    
        setTheme(newTheme);
    
        document.documentElement.setAttribute("data-theme", newTheme);
      };
    
      useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);

  return <div className="flex  flex-col gap-y-4 justify-center items-center">
    <Pricing theme={theme}/>
    <ThemeController controller={handleTheme} theme={theme}  />
  </div>;
};

export default Landing;
