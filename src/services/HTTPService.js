import axios from "axios";

const httpService = function () {
  const service = axios.create({
    baseURL: "https://carapp.softsprints.com/api/",
    timeout: 300000,
  });
  service.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("token"));
console.log('token in interceptor', token)
      if (token) {
        console.log('token', token)
        config.headers["Authorization"] = "Bearer " + token;
      }
      config.headers["Accept"] = "application/json";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return service;
};
export default httpService;
