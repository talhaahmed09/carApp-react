import { get } from "../http_request";


export const getAllFiles = () => {
    return get(`file`);
  };