import { ADD, REMOVE, FILTER } from './constants';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filtered: '100',
};

const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(ADD, (state, action) => {
      state.items = [...state.items, action.payload];
    })
    .addCase(REMOVE, (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    })
    .addCase(FILTER, (state, action) => {
      state.filtered = action.payload.q
        ? state.items.filter(contact => contact.name.includes(action.payload.q))
        : '100';
    });
});

const persistConfig = {
  key: 'data', // ключ, под которым данные будут сохранены в localStorage
  storage, // выбор хранилища (localStorage, sessionStorage, etc.)
  whitelist: ['items'], // массив имен ключей, которые нужно сохранить
};

const persistedReducer = persistReducer(persistConfig, counterReducer);
export default persistedReducer;
