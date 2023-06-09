import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const store = configureStore({
  reducer: {
    friend: persistedReducer,
  },
});

export const persistor = persistStore(store)
