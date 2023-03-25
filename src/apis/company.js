import { get, post, put, remove } from "../http_request";

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
  return post(`company/${id}`);
};

export const updateCompany = (id, body) => {
  return put(`company/${id}`, body);
};

export const searchCompany = (query, { size, page }) => {
  return get(`company/search?query=${query}&size=${size}&page=${page}`);
}
