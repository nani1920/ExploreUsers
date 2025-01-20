/** @format */

import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider as CustomThemeProvider } from "../src/context/theme";
import { UserContextProvider } from "../src/context/userContext";
import UserDetails from "./components/UserDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <CustomThemeProvider>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
