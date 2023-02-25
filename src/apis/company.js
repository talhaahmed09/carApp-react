import { get, post, remove } from "../http_request";

export const getAllCompanies = ({ size, page }) => {
  return get(`company?size=${size}&page=${page}`);
};

export const createCompany = (values) => {
  return post("company", values);
};

export const getCompanyDetail = (id) => {
  return get(`/company/${id}`);
};

export const deleteCompany = (id) => {
  return remove(`company/${id}`);
};

export const updateCompany = (id, body) => {
  return post(`company/${id}`, body);
};
