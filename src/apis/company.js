import { get } from "../http_request"

export const getAllCompanies = ({size, page}) => {
    return get(`company?size=${size}&page=${page}`);
;}


