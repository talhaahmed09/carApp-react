import httpService from "./HTTPService";
import _isEmpty from "lodash/isEmpty";
import { ERROR_MESSAGES } from "../utils/constant";

const service = function (token = null, error_callback) {
  const authService = httpService(token);
  // response interceptor
  authService.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response) {
        if (error_callback instanceof Function) {
          error_callback(error);
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
  return authService;
};

export default service;
