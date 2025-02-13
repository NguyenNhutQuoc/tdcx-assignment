// filepath: src/redux/themeSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: localStorage.getItem("isDarkMode") === "true",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", state.isDarkMode.toString());
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
