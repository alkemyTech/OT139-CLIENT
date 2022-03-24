import { configureStore } from '@reduxjs/toolkit';
import {
  categoriesCreateReducer,
  categoriesUpdateReducer,
} from '../reducers/categoriesReducers';
import { contactAddReducer } from '../reducers/contactReducers';
import { getUserInfo, getToken } from '../localStorage/storage';
import {
  userDetailsReducer,
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
    categoriesCreate: categoriesCreateReducer,
    categoriesUpdate: categoriesUpdateReducer,
    userLogin: userLoginReducer,
    userLogout: userLogoutReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    usersList: usersListReducer,
    contactAdd: contactAddReducer,
  },
  initialState,
});
