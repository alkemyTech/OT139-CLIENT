import axios from 'axios';
import { get } from './apiService';

const getUsers = async () => {
  return get('/users');
};

const loginUser = async (email, password) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = {};

  try {
    const { data } = await axios.post(
      'http://localhost:3000/users/auth/login',
      { email, password },
      config
    );
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

const registerUser = async (email, password, firstName, lastName) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = {};

  try {
    const { data } = await axios.post(
      'http://localhost:3000/users/auth/register',
      { email, password, firstName, lastName },
      config
    );
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export { loginUser, registerUser, getUsers };
