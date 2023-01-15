import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../components/Products/productsSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
