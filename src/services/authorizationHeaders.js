import getToken from './tokenService';

export const getPrivateHeaders = () => {
  var headers = {};

  setAuthorizationHeader(headers);
  
  return headers;
};

const setAuthorizationHeader = (headers) => {
  const token = getToken()

  return headers.Authorization = token
};


