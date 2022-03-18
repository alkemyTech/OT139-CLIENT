import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
} from '../constants/userConstants';
import { setUserInfo, deleteUserInfo } from '../localStorage/storage';
import { loginUser, registerUser, getUsers } from '../services/usersService';

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  const { data, error } = await loginUser(email, password);

  if (data) {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    setUserInfo(data);
  } else {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

const usersList = () => async (dispatch) => {
  dispatch({ type: USERS_LIST_REQUEST });

  const { error, data } = await getUsers();

  if (data) {
    dispatch({ type: USERS_LIST_SUCCESS, payload: data });
  } else {
    dispatch({
      type: USERS_LIST_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const register =
  (email, password, name, lastName) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data, error } = await registerUser(email, password, name, lastName);

    if (data) {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      setUserInfo(data);
    } else {
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
export { usersList };
