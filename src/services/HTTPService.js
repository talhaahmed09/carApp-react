import axios from "axios";

const httpService = function (token = null) {
  const service = axios.create({
    baseURL: "https://carapp.taswog.com/api",
    timeout: 300000,
  });
  service.interceptors.request.use(
    (config) => {
      if (token !== null && typeof token === 'string') {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return service;
};
export default httpService;
