import axios from "axios";
import { ERROR_MESSAGES } from "../../../utils/constant";
import _isEmpty from "lodash/isEmpty";
import { useState } from "react";
import service from "../../../services/AuthService";

export default function AuthUser() {
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
  const saveToken = (token, user) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    // navigate(`/dashboard`);
  };
  const logout = () => {
    localStorage.clear();
    window.location.replace(`/login`);
  };
  const error_callback = (error) => {
    if (error.response.status === 401) {
      logout();
      return Promise.reject();
    }
  };
  const httpService = service(getToken(), error_callback);
  return {
    setToken: saveToken,
    getToken,
    token: getToken(),
    user: getUser(),
    httpService,
    logout,
  };
}
