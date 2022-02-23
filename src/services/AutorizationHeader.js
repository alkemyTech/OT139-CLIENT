import axios from "axios";
import {getToken} from './tokenService';

const getAuthorizationHeader = () => {
  const token = getToken();
  return (axios.defaults.headers.common["Authorization"] = token);
};

export default getAuthorizationHeader;
