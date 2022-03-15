import {
  ORGANIZATIONS_DETAILS_FAIL,
  ORGANIZATIONS_DETAILS_REQUEST,
  ORGANIZATIONS_DETAILS_SUCCESS,
} from '../constants/organizationsConstants';

const organizationsDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ORGANIZATIONS_DETAILS_REQUEST:
      return { loading: true };
    case ORGANIZATIONS_DETAILS_SUCCESS:
      return { loading: false, organization: action.payload };
    case ORGANIZATIONS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { organizationsDetailsReducer };
