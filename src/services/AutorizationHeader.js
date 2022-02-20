import axios from "axios";
import getToken from "./getToken";

const getAuthorizationHeader = () => {
  const token = getToken();
  return (axios.defaults.headers.common["Authorization"] = token);
};

export default getAuthorizationHeader;
