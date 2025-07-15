import { useTheme } from "../context/ThemeContext";

export function ThemeBtn({ styles }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`${styles}`} onClick={() => toggleTheme()}>
      {theme === "light" ? "Dark🌙" : "Light☀️"}
    </button>
  );
}
