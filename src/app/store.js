import { configureStore } from '@reduxjs/toolkit';
import {
  categoriesCreateReducer,
  categoriesUpdateReducer,
  categoriesDetailsReducer,
} from '../reducers/categoriesReducers';
import { organizationsDetailsReducer } from '../reducers/organizationsReducers';

export default configureStore({
  reducer: {
    categoriesCreate: categoriesCreateReducer,
    categoriesUpdate: categoriesUpdateReducer,
    categoriesDetails: categoriesDetailsReducer,
    organizationsDetails: organizationsDetailsReducer,
  },
});
