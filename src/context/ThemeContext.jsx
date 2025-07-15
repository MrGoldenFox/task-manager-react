import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryBg = rootStyles.getPropertyValue("--primary-bg");
    const primary = rootStyles.getPropertyValue("--primary");

    if (theme === "light") {
      document.body.style.background = primaryBg;
      document.body.style.color = primary;
    } else {
      document.body.style.background = primary;
      document.body.style.color = primaryBg;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
