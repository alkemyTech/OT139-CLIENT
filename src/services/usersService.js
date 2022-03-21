import { get, post } from './apiService';

const getUsers = async () => {
  return get('/users');
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

export { loginUser, registerUser, getUsers };
