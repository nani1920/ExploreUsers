/** @format */

import { createContext, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue color
    },
    background: {
      default: "#f3f3f3",
      primary: "#F8F8F8",
      secondary: "#ffffff",
    },
    text: {
      primary: "#000000", // Black text
    },
    borders: {
      main: "#cccccc", // Border color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2", // Blue color
    },
    background: {
      secondary: "#000000",
      default: "#000000",
      primary: "#444444",
    },
    text: {
      primary: "#ffffff", // White text
    },
    borders: {
      main: "#444444", // Border color
    },
  },
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
