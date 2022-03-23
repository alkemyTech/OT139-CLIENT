import {
  CATEGORIES_CREATE_ERROR,
  CATEGORIES_CREATE_REQUEST,
  CATEGORIES_CREATE_SUCCESS,
  CATEGORIES_UPDATE_ERROR,
  CATEGORIES_UPDATE_REQUEST,
  CATEGORIES_UPDATE_SUCCESS,
} from '../constants/categoriesConstants';

const categoriesCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_CREATE_REQUEST:
      return { loading: true };
    case CATEGORIES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORIES_CREATE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const categoriesUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORIES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORIES_UPDATE_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { categoriesCreateReducer, categoriesUpdateReducer };
