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
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../constants/userConstants';
import {
  setUserInfo,
  deleteUserInfo,
  setToken,
  deleteToken,
} from '../localStorage/storage';
import {
  loginUser,
  registerUser,
  getUsers,
  getUser,
} from '../services/usersService';

const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  const { data, error } = await loginUser(email, password);

  if (data) {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    setUserInfo(data.user);
    setToken(data.token);
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

const register = (email, password, name, lastName) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });

  const { data, error } = await registerUser(email, password, name, lastName);

  if (data) {
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    setUserInfo(data);
    setToken(data.password);
  } else {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

const logout = () => (dispatch) => {
  deleteUserInfo();
  deleteToken();
  dispatch({ type: USER_LOGOUT_SUCCESS });
};

const getUserDetails = () => async (dispatch) => {
  dispatch({ type: USER_DETAILS_REQUEST });

  const { data, error } = await getUser();
  if (data) {
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } else if (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export { usersList, getUserDetails, logout, login, register };
