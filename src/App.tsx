// src/App.tsx
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { AppRouter } from "./routes";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

export function App() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <ThemeSwitcher />
      <AppRouter />
    </div>
  );
}
