import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constant';

const slice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    change(state, action) {
      return action.payload;
    },
  },
});

export const { change } = slice.actions;
console.dir(change);
export const filterReducer = slice.reducer;
