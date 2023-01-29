import React, { Component } from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  //get item from localstorage

  const user = localStorage.getItem("user");

  if (user) {
    var ParsedUser = JSON.parse(user);
    
  }

  if (ParsedUser) {
    return {
      auth: true,
      role: ParsedUser.myRole[0],
    };
  } else {
    return {
      auth: false,
      role: null,
    };
  }
};

const ProtectedRoutes = (props) => {
  const { auth, role } = useAuth();

  const { Component } = props;
  //if the role required is there or not
  if (props.roleRequired) {
    return auth ? (
      props.roleRequired === role ? (
        <Component  />
      ) : (
        <Navigate to="/denied" />
      )
    ) : (
      <Navigate to="/" />
    );
  } else {
    return auth ? <Component /> : <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
