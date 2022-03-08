import { USER_INFO } from '../constants/localStorageConstants';

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

export { getUserInfo, setUserInfo, deleteUserInfo };
