import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthUser from "./SuperAdmin/Auth/AuthUser";

const RequireAuth = (props) => {
  const { user } = AuthUser();
  const location = useLocation();

  useEffect(() => {
    console.log(user);
  });

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
