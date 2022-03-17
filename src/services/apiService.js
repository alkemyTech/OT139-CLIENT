import axios from 'axios';
import { getPrivateHeaders } from './authorizationHeaders';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const post = async (endPoint, body) => {
  const headers = getPrivateHeaders();
  const response = {};
  
  try {
    const data = await axios.post(endPoint, body, headers);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const get = async (endPoint) => {
  const response = {};

  try {
    const data = await axios.get(endPoint);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const put = async (endPoint, body) => {
  const headers = getPrivateHeaders();

  try {
    const data = await axios.put(endPoint, body, headers);
    return data;
  } catch (error) {
    return error;
  }
};
