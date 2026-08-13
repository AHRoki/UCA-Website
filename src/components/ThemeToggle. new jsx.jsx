import "./ThemeToggle.css";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      title={
        theme === "light"
          ? "Switch to Dark Mode"
          : "Switch to Light Mode"
      }
    >
      <span className="theme-toggle-icon">
        {theme === "light" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

export default ThemeToggle;