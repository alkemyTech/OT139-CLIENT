import { configureStore } from '@reduxjs/toolkit';
import { contactAddReducer } from '../reducers/contactReducers';
import { usersListReducer } from '../reducers/userReducer';

export default configureStore({
  reducer: {
    usersList: usersListReducer,
    contactAdd: contactAddReducer,
  },
});
