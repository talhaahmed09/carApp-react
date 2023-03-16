import { get } from "../http_request";

export const getAllAddresses = () => {
    return get(`address`);
  };