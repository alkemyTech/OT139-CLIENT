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
  return get('http://localhost:3000/auth/me')
}

export { loginUser, registerUser, getUsers , getUser };
