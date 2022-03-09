import axios from 'axios';
import { getPrivateHeaders } from './authorizationHeaders';
axios.defaults.baseURL = process.env.BASE_URL;

export const post = async (endPoint, body) => {
  const  headers = getPrivateHeaders();
  
  try {
    const data = await axios.post(endPoint, body, headers);
    console.log(data)
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
