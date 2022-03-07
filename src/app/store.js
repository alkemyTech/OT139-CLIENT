import { configureStore } from '@reduxjs/toolkit';
import { userLoginReducer } from '../reducers/userReducers';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

export default configureStore({
  reducer: {
    userLogin: userLoginReducer,
  },
  initialState,
});
