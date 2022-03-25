import { configureStore } from '@reduxjs/toolkit';
import { contactAddReducer } from '../reducers/contactReducers';
import { getUserInfo, getToken } from '../localStorage/storage';
import { organizationDetailsReducer } from '../reducers/organizationReducers';
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
    userLogin: userLoginReducer,
    userLogout: userLogoutReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    usersList: usersListReducer,
    organizationDetails: organizationDetailsReducer,
    contactAdd: contactAddReducer,
  },
  initialState,
});
