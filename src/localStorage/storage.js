const getUserInfo = () => {
  return localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;
};

const setUserInfo = (user) => {
  localStorage.setItem('userInfo', JSON.stringify(user));
};

const deleteUserInfo = () => {
  localStorage.removeItem('userInfo');
};

export { getUserInfo, setUserInfo, deleteUserInfo };
