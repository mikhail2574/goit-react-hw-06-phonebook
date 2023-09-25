import { createStore } from 'redux';
import persistedReducer from './counter/reducer';
import persistStore from 'redux-persist/es/persistStore';

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
