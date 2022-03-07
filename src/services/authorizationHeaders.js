import getToken from './tokenService';

const autorizationHeader = () => {
  const token = getToken();
  return { headers: { Authorization: token }};
};

export default autorizationHeader;
