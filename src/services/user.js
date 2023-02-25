import { get } from "../http_request";

export const getUsers = () => {
  return get("/user");
};
