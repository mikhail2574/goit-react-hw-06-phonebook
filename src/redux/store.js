import { configureStore } from '@reduxjs/toolkit';
import { itemReducer } from './counter/itemSlice';
// import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});
// export const persistor = persistStore(store);
