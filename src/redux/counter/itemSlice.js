import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    removeItem: (state, action) => {
      state = state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
