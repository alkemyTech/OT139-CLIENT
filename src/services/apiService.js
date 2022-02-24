import axios from "axios";
import {getToken} from './tokenService';
axios.defaults.baseURL = process.env.BASE_URL;
const token = getToken()
axios.defaults.headers = { "Authorization": token };

export const post = async (endPoint, body) => {
  try {
    const { data } = await axios.post(endPoint, body);
    return data;
  } catch (error) {
    return error;
  }
};

export const get = async (endPoint) => {
  try {
    const { data } = await axios.get(endPoint);
    return data;
  } catch (error) {
    return error;
  }
};
