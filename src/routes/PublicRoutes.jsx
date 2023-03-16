import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PublicRoutes = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/dashboard";
  return isLoggedIn ? <Navigate to={from} /> : <Outlet />;
};

export default PublicRoutes;
