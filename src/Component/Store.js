import { configureStore } from '@reduxjs/toolkit';
import webPage from './Counter';

export default configureStore({
  reducer: {
    web: webPage,
  },
})