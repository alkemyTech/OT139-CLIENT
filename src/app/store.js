import { configureStore } from '@reduxjs/toolkit';
import { getUserInfo, getToken } from '../localStorage/storage';
import {
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
  usersListReducer,
} from '../reducers/userReducers';

const userInfoFromStorage = getUserInfo();
const tokenFromStorage = getToken();

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
    token: tokenFromStorage,
  },
};

export default configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userLogout: userLogoutReducer,
    userRegister: userRegisterReducer,
    usersList: usersListReducer,
  },
  initialState,
});
