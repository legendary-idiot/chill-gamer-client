import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Toggle from "./../Components/Toggle";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <header className="bg-base-100 shadow-2xs">
        <Toggle />
        <Navbar />
      </header>
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Root;
