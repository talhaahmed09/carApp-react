import { remove } from "lodash";
import { get, post } from "../http_request";

const getAllUsers = ({ size, page }) => {
  return get(`user?size=${size}&page=${page}`);
};

const getUserDetails = (id) => {
  return get(`/user/${id}`);
};

export const deleteCompany = (id) => {
  return remove(`user/${id}`);
};

export const createUser = (values) => {
  return post("user", values);
};

export const updateUser = (id, body) => {
  return post(`user/${id}`, body);
};
