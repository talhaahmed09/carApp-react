import axios from "axios";

const httpService = function (token = null) {
  const service = axios.create({
    baseURL: "https://carapp.softsprints.com/api/",
    timeout: 300000,
  });
  service.interceptors.request.use(
    (config) => {
      if (token) {
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
