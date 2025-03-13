import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Toggle from "./../Components/Toggle";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import LoadingSpinner from "../Pages/LoadingSpinner";

const Root = () => {
  const { loading } = useContext(AuthContext);
  if (loading) return <LoadingSpinner />;
  return (
    <div>
      <header className="bg-base-100 shadow-2xs">
        <Toggle />
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
