import axios from "axios";
import { autorizationHeader } from './authorizationHerders'
axios.defaults.baseURL = process.env.BASE_URL;

export const post = async (endPoint, body )  => {
  const headers = autorizationHeader();
  try {
    const { data } = await axios.post(endPoint, body, headers);
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
