import { ADD, REMOVE, FILTER } from './constants';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  items: [],
  filtered: '100',
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: [...state.items, action.contact],
      };
    case REMOVE:
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.id),
      };
    case FILTER:
      return {
        ...state,
        filtered: action.q
          ? state.items.filter(contact => contact.name.includes(action.q))
          : '100',
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'data', // ключ, под которым данные будут сохранены в localStorage
  storage, // выбор хранилища (localStorage, sessionStorage, etc.)
  whitelist: ['items'], // массив имен ключей, которые нужно сохранить
};

const persistedReducer = persistReducer(persistConfig, counterReducer);
export default persistedReducer;
