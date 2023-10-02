import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    allItems: [],
    filteredItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.allItems.push(action.payload);
      state.filteredItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.allItems = state.allItems.filter(
        contact => contact.id !== action.payload
      );
      state.filteredItems = state.filteredItems.filter(
        contact => contact.id !== action.payload
      );
    },
    filterItems: (state, action) => {
      if (action.payload && action.payload.q) {
        state.filteredItems = state.allItems.filter(contact =>
          contact.name.includes(action.payload.q)
        );
      } else {
        state.filteredItems = state.allItems;
      }
    },
  },
});

export const { addItem, removeItem, filterItems } = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
