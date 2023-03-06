import { remove } from "lodash";
import { get, post, put } from "../http_request";

export const getAllUsers = ({ size, page }) => {
  return get(`user?size=${size}&page=${page}`);
};

export const getUserDetails = (id) => {
  return get(`/user/${id}`);
};

export const deleteUser = (id) => {
  return post(`user/${id}`);
};

export const createUser = (values) => {
  return post("user", values);
};

export const updateUser = (id, body) => {
  return put(`user/${id}`, body);
};

export const searchUser = (query, { size, page }) => {
  return get(`user/search?q=${query}&size=${size}&page=${page}`);
}