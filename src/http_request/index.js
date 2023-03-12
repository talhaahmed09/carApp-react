import service from "../services/AuthService";

const error_callback = (error) => {
  if (error.response.status === 401) {
    console.log("error", error.response.status);
    localStorage.clear();
    window.location.replace(`/login`);
    return Promise.reject();
  }
};
const token = JSON.parse(localStorage.getItem("token"));
const httpService = service(token, error_callback);

export const post = (url, body, headers = {}, ifScheduleTask = false) => {
  return httpService({
    url,
    headers,
    method: "POST",
    data: body,
    ...(ifScheduleTask && { timeout: 100000 }),
  });
};

export const get = (url, params = {}) => {
  return httpService({
    url,
    method: "GET",
    params,
  });
};

export const remove = (url, body) => {
  return httpService({
    url,
    method: "DELETE",
    ...(body && { data: body }),
  });
};

export const put = (url, body) => {
  return httpService({
    url,
    method: "PUT",
    data: body,
  });
};
