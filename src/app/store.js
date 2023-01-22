import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../components/login/userSlice';

export const store = configureStore({
  reducer: {
    user : userReducer
  }
});
