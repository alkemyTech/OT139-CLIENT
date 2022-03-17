import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

import { setUserInfo, deleteUserInfo } from '../localStorage/storage';
import { loginRequest, registerRequest } from '../api/users';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const data = await loginRequest(email, password);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    setUserInfo(data);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const register =
  (email, password, name, lastName) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const data = await registerRequest(email, password, name, lastName);

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      setUserInfo(data);
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response?.data?.message || error.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  deleteUserInfo();
  dispatch({ type: USER_LOGOUT_SUCCESS });
};
