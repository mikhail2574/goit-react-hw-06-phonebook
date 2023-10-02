import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { itemReducer } from './counter/itemSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, itemReducer);

export const store = configureStore({
  reducer: {
    item: persistedReducer,
  },
});

export const persistor = persistStore(store);
