import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './counter/itemSlice';
import { filterReducer } from './counter/filterSlice';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    item: itemReducer,
    filter: filterReducer,
  },
});
export const persistor = persistStore(store);
