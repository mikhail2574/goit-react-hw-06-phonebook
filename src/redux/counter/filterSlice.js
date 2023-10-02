import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '100',
  reducers: {
    filterItems(state, action) {
      console.log(state);
      state.filter = action.payload.q
        ? state.items.filter(contact => contact.name.includes(action.payload.q))
        : '100';
    },
    setFilter: action => {
      return action.payload;
    },
  },
});

export const { filterItems, setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
