import { get, post } from "../http_request"

export const getAllCompanies = ({size, page}) => {
    return get(`company?size=${size}&page=${page}`);
}

export const createCompany = (values) => {
    return post('company', values);
}

