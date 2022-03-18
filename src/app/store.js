import { configureStore } from '@reduxjs/toolkit';
import { getUserInfo } from '../localStorage/storage';
import {
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
  usersListReducer,
} from '../reducers/userReducers';

const userInfoFromStorage = getUserInfo();

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
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
