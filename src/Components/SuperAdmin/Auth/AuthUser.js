import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

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

  }

  const http = axios.create({
    baseURL: "https://carapp.taswog.com/api",
    headers: {
        "Content-type" : "application/json",
      "Authorization" : `Bearer ${token}`
    },
    
  });
  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    http,
    logout
  };
}
