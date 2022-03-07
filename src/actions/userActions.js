import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants';

import { setUserInfo, deleteUserInfo } from '../localStorage/storage';
import { loginRequest } from '../api/users';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const data = await loginRequest(email, password);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    setUserInfo(data);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response?.data.message || error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  deleteUserInfo();
  dispatch({ type: USER_LOGOUT });
};
