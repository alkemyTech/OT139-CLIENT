import { configureStore } from '@reduxjs/toolkit';
import { usersListReducer } from '../reducers/userReducer';

export default configureStore({
  reducer: {
    usersList: usersListReducer,
  },
});
