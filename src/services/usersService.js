import { getToken, getUserInfo } from '../localStorage/storage';
import { get, post } from './apiService';

const getUsers = async () => {
  return get('http://localhost:3000/users');
};

const loginUser = async (email, password) => {
  return post('http://localhost:3000/users/auth/login', { email, password });
};

const registerUser = async (email, password, firstName, lastName) => {
  return post('http://localhost:3000/users/auth/register', {
    email,
    password,
    firstName,
    lastName,
  });
};

const getUser = async () => {
  const response = {};
  
  try {
    const { data } = await get(`http://localhost:3000/auth/me`);
    if(data.roleId === 1){
      response.data = {...data, isAdmin: true};
    } else {
      response.data = {...data, isAdmin: false};
    }
  } catch (error) {
    response.error = error;
  }
  return response;
};

export { loginUser, registerUser, getUsers , getUser };
