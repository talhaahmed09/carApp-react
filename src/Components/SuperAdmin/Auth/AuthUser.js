import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES } from "../../../utils/constant";
import _isEmpty from "lodash/isEmpty";
import { useState } from "react";

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
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (token, user) => {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
    // navigate(`/dashboard`);
  };
  const logout = () => {
    localStorage.clear();
    navigate(`/`);
  };

  const httpService = axios.create({
    baseURL: "https://carapp.taswog.com/api",
    timeout: 300000,
  });
  httpService.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // response interceptor
  httpService.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          logout();
          return Promise.reject();
        }
        if (!_isEmpty(error, "response") && error.response.status >= 400) {
          const errorMsg = ERROR_MESSAGES[error.response.status];
          const errorMsgDefault =
            errorMsg || "Something Went Wrong, Please try again later";

          const errorObj = error.response.data || errorMsgDefault;
          const errMessage = decodeURI(errorObj);

          if (!errMessage.includes("TicketId:")) {
            Notification.error({
              title: "Error",
              message: errMessage,
              duration: 5 * 1000,
            });
          }
          return Promise.reject(errMessage);
        }
      }
      const err = error.message ? error.message : JSON.stringify(error);
      Notification.error({
        title: "Error",
        message: err,
        duration: 5 * 1000,
      });
      return Promise.reject(err);
    }
  );
  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    httpService,
    logout,
  };
}
