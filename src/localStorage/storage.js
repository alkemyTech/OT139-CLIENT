import { USER_INFO, TOKEN } from '../constants/localStorageConstants';

const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO);
  return userInfo && JSON.parse(userInfo);
};

const setUserInfo = (user) => {
  localStorage.setItem(USER_INFO, JSON.stringify(user));
};

const deleteUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};

const getToken = () => {
  const Token = localStorage.getItem(TOKEN);
  return Token && JSON.parse(Token);
};

const setToken = (token) => {
  localStorage.setItem(TOKEN, JSON.stringify(token));
};

const deleteToken = () => {
  localStorage.removeItem(TOKEN);
};

export {
  getUserInfo,
  setUserInfo,
  deleteUserInfo,
  getToken,
  setToken,
  deleteToken,
};
