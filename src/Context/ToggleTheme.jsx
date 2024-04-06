import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const ToggleThemeProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(true);

  const handleBodyBackground = () => {
    const body = document.querySelector("body");
    body.style.backgroundColor = toggleTheme ? "#f0f0f0" : "#141c2f";
  };

  const handleToggleTheme = () => {
    setToggleTheme(prev => !prev);
    handleBodyBackground();
  };
  return (
    <ThemeContext.Provider value={{ handleToggleTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
