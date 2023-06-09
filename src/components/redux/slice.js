import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'friend',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload ];
    },
    deleteContact(state, action) {
      state.contacts =  state.contacts.filter(contact => contact.id !== action.payload);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;
