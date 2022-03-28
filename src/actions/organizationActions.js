import { get } from '../services/apiService';

const {
  ORGANIZATION_DETAILS_REQUEST,
  ORGANIZATION_DETAILS_SUCCESS,
  ORGANIZATION_DETAILS_FAIL,
} = require('../constants/organizationConstants');

const getOrganizationDetails = () => async (dispatch) => {
  dispatch({ type: ORGANIZATION_DETAILS_REQUEST });

  const { data, error } = await get(
    'http://localhost:3000/organizations/1/public'
  );
  if (data) {
    dispatch({ type: ORGANIZATION_DETAILS_SUCCESS, payload: data });
  } else {
    dispatch({
      type: ORGANIZATION_DETAILS_FAIL,
      payload: error?.response?.data?.message || error?.message || 'error',
    });
  }
};

export { getOrganizationDetails };
