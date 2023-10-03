import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    allItems: [],
    q: '',
  },
  reducers: {
    setQ: (state, action) => {
      state.q = action.payload; // action to set q
    },
    addItem: (state, action) => {
      state.allItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.allItems = state.allItems.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem, setQ } = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
