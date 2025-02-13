// filepath: src/components/ThemeSwitcher.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleTheme } from "../redux/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";
import "./styles/theme-switcher.css";
const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <div
      onClick={() => dispatch(toggleTheme())}
      style={{ cursor: "pointer", fontSize: "24px", padding: "8px" }}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default ThemeSwitcher;
