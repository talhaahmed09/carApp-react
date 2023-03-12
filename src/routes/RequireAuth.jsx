import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoutes = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    console.log(isLoggedIn);
  });

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
