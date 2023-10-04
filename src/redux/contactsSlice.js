import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constant';
import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    newContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      state = state.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { newContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
