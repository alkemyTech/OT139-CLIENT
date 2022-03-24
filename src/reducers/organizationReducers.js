import {
  ORGANIZATION_DETAILS_FAIL,
  ORGANIZATION_DETAILS_REQUEST,
  ORGANIZATION_DETAILS_SUCCESS,
} from '../constants/organizationConstants';

export const organizationDetailsReducer = (
  state = { organization: null },
  action
) => {
  switch (action.type) {
    case ORGANIZATION_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORGANIZATION_DETAILS_SUCCESS:
      return { loading: false, organization: action.payload };
    case ORGANIZATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
