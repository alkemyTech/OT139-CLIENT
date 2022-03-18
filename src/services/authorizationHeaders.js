import { getToken } from '../localStorage/storage';

export const getPrivateHeaders = () => {
  const headers = {};

  setAuthorizationHeader(headers);

  return headers;
};

const setAuthorizationHeader = (headers) => {
  const token = getToken();

  return (headers.Authorization = token);
};
