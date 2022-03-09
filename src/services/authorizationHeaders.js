import getToken from './tokenService';

export const getPrivateHeaders = () => {
  var setHeaders = {}

  const headers = setAuthorizationHeader();
  setHeaders = {headers};
  
  return setHeaders;
};

const setAuthorizationHeader = (headers) => {
  const token = getToken();

  return {
    Authorization: token
  };
};

export default getPrivateHeaders;
