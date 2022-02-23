import axios from "axios";
import {autorizationHeader} from './autorizationHeader';
axios.defaults.baseURL = process.env.BASE_URL;

const header = autorizationHeader();

export const post = async (endPoint, body) => {
  try {
    const { data } = await axios.post(endPoint, body , header);
    return data;
  } catch (error) {
    return error;
  }
};

export const get = async (endPoint) => {
  try {
    const { data } = await axios.get(endPoint , header);
    return data;
  } catch (error) {
    return error;
  }
};
