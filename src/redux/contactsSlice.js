import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constant';

const slice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    newContact(state, action) {
      return [...state, action.payload];
      //state.push(action.payload)
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { newContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
