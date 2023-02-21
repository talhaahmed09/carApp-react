import AuthUser from "../Components/SuperAdmin/Auth/AuthUser";

const { httpService } = AuthUser();

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
