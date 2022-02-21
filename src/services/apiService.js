import axios from "axios";
axios.defaults.baseURL = process.env.BASE_URL;

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
