import { createSlice } from '@reduxjs/toolkit';

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    },
    resetForm(state) {
      state.name = '';
      state.number = '';
    },
  },
});

export const { setName, setNumber, resetForm } = contactFormSlice.actions;
