import {
  CONTACT_ADD_FAIL,
  CONTACT_ADD_REQUEST,
  CONTACT_ADD_SUCCESS,
} from '../constants/contactConstants';

export const contactAddReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_ADD_REQUEST:
      return { loading: true };
    case CONTACT_ADD_SUCCESS:
      return { loading: false, success: true };
    case CONTACT_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
