import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES } from "../../../utils/constant";
import _isEmpty from "lodash/isEmpty";
import { useState } from "react";
import service from "../../../services/AuthService";

export default function AuthUser() {
  const navigate = useNavigate();
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const getUser = () => {
    const userString = localStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };
  const [token, setToken] = React.useState(getToken());
  const [user, setUser] = React.useState(getUser());

  const saveToken = (token, user) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
    // navigate(`/dashboard`);
  };
  const logout = () =>{
    localStorage.clear()
    navigate(`/`);
  };
  const error_callback = (error) => {
    if (error.response.status === 401) {
      logout();
      return Promise.reject();
    }
  };
  const httpService = service(token, error_callback);
  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    http: httpService,
    logout,
  };
}
