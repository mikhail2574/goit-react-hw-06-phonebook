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
    filterItems: (state, action) => {
      console.log(state);
      return state.filter(contact => contact.name.includes(action.payload.q));
    },
  },
});

export const { addItem, removeItem, filterItems } = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
export const selectItems = state => state.items; // Селектор для получения items
