import { post } from "../http_request";

export const loginUser = ({ email, password }) => {
  return post("/login", { email: email, password: password });
};
