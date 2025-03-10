import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./../Components/LoadingSpinner";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) return children;

  return <Navigate to="/login"></Navigate>;
};

export default Private;
