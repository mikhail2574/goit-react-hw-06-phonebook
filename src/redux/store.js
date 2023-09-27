import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './counter/reducer';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
