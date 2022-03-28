import {
  CONTACT_ADD_FAIL,
  CONTACT_ADD_REQUEST,
  CONTACT_ADD_SUCCESS,
} from '../constants/contactConstants';
import { postContact } from '../services/contactService';

const addContact = (name, email, message) => async (dispatch) => {
  dispatch({ type: CONTACT_ADD_REQUEST });

  const { data, error } = await postContact({ name, email, message });
  if (data) {
    dispatch({ type: CONTACT_ADD_SUCCESS });
  } else {
    dispatch({
      type: CONTACT_ADD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export { addContact };
