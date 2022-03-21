import {
  USERS_LIST_FAIL,
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_RESET,
} from '../constants/userConstants';

export const usersListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return { ...state, loading: true };
    case USERS_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USERS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USERS_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};
