import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice';
import {contactFormSlice} from './formSlice'

export const store = configureStore({
  reducer: {
    friend: contactsSlice.reducer,
    contactForm: contactFormSlice.reducer,
  },
});
