import {
  CATEGORIES_CREATE_ERROR,
  CATEGORIES_CREATE_REQUEST,
  CATEGORIES_CREATE_SUCCESS,
  CATEGORIES_UPDATE_ERROR,
  CATEGORIES_UPDATE_REQUEST,
  CATEGORIES_UPDATE_SUCCESS,
} from '../constants/categoriesConstants';
import { post, put } from '../services/apiService';

const createCategory =
  ({ name, description }) =>
  (dispatch) => {
    dispatch({ type: CATEGORIES_CREATE_REQUEST });

    const { data, error } = post('/categories', { name, description });
    if (data) {
      dispatch({ type: CATEGORIES_CREATE_SUCCESS });
    } else {
      dispatch({
        type: CATEGORIES_CREATE_ERROR,
        error: error?.response?.data?.message || error?.message || 'error',
      });
    }
  };

const updateCategory =
  ({ name, description, id }) =>
  (dispatch) => {
    dispatch({ type: CATEGORIES_UPDATE_REQUEST });

    const { data, error } = put('/categories', { name, description, id });
    if (data) {
      dispatch({ type: CATEGORIES_UPDATE_SUCCESS });
    } else {
      dispatch({
        type: CATEGORIES_UPDATE_ERROR,
        error: error?.response?.data?.message || error?.message || 'error',
      });
    }
  };

export { createCategory, updateCategory };
