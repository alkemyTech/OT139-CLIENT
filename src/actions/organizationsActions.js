import {
  ORGANIZATIONS_DETAILS_FAIL,
  ORGANIZATIONS_DETAILS_REQUEST,
  ORGANIZATIONS_DETAILS_SUCCESS,
} from '../constants/organizationsConstants';
import { get } from '../services/apiService';

const getOrganizationDetails = () => async (dispatch) => {
  try {
    dispatch({ type: ORGANIZATIONS_DETAILS_REQUEST });

    const data = await get('http://localhost:3000/organizations/1/public');
    dispatch({ type: ORGANIZATIONS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORGANIZATIONS_DETAILS_FAIL,
      payload: error.response ? error.response?.data?.message : error.message,
    });
  }
};

export { getOrganizationDetails };
