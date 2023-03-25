import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../components/login/userSlice';
import { productsReducer } from '../components/Products/productsSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
