import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
} from '../constants/userConstants';
import { getUsers } from '../services/usersService';

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

export { usersList };
