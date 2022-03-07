import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCESS,
  USERS_LIST_FAIL,
} from '../constants/userConstants';
import { getUsers } from '../api/users';

const usersList = () => async (dispatch) => {
  try {
    dispatch({ type: USERS_LIST_REQUEST });

    const data = await getUsers();

    dispatch({ type: USERS_LIST_SUCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_LIST_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export { usersList };
