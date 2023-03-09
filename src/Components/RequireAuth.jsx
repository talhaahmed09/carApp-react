import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AuthUser from "./SuperAdmin/Auth/AuthUser";

const RequireAuth = (props) => {
  const { token, user } = AuthUser();
  const {auth, setAuth} = useAuth();

  useEffect(() => {
    if(token && user){
      setAuth({token, user});
    }
  }, [])

  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
