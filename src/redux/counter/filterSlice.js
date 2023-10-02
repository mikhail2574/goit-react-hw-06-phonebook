import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '100',
  reducers: {
    filterItems(state, action) {
      state = action.payload.q
        ? state.items.filter(contact => contact.name.includes(action.payload.q))
        : '100';
    },
  },
});

export const { filterItems } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
