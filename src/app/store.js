import { configureStore } from '@reduxjs/toolkit';
import {
  categoriesCreateReducer,
  categoriesUpdateReducer,
  categoriesDetailsReducer,
} from '../reducers/categoriesReducers';

export default configureStore({
  reducer: {
    categoriesCreate: categoriesCreateReducer,
    categoriesUpdate: categoriesUpdateReducer,
    categoriesDetails: categoriesDetailsReducer,
  },
});
