import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Toggle from "./../Components/Toggle";

const Root = () => {
  return (
    <div>
      <header className="bg-base-100 shadow-2xs">
        <Toggle />
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
