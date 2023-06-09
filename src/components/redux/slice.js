import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'friend',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      return state.contacts.filter(contact => contact.id !== action.id);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;
