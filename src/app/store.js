import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import counterReducer from '../features/counter/counterSlice';
import { userLoginReducer } from '../reducers/userReducers';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

export default configureStore({
  reducer: {
    counter: counterReducer,
    userLogin: userLoginReducer,
  },
  initialState,
});
=======

export default configureStore({ reducer: {} });
>>>>>>> 2b9a83f0dbaa358df58be6bf5579d1188219939d
