import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      //   prepare(items) {
      //     return {
      //       payload: {
      //         items,
      //       },
      //     };
      //   },
    },
    removeItem: (state, action) => {
      return (state = state.filter(contact => contact.id !== action.payload));
    },
  },
});

export const { addItem, removeItem } = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
export const selectItems = state => state.items; // Селектор для получения items
