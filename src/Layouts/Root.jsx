import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Toggle from "./../Components/Toggle";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../Pages/LoadingSpinner";
import { getThemeMode } from "../utilities/ThemeLS";

const Root = () => {
  const { loading } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const currentTheme = getThemeMode();
    if (currentTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }, []);

  if (loading) return <LoadingSpinner />;
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <header className="bg-base-100 shadow-sm">
        <Toggle setDarkMode={setDarkMode} darkMode={darkMode} />
        <Navbar />
      </header>
      <div className="min-h-[calc(100vh-450px)] flex flex-col justify-center">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Root;
