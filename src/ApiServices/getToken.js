import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? axios.defaults.headers.common['Authorization'] = token : console.log('No hay token');
};

export default getToken;
