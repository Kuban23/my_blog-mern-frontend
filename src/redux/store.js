import { configureStore } from "@reduxjs/toolkit";

import postsSliceReducer from './slices/posts';
import authSliceReducer from './slices/auth';

const store = configureStore({
   reducer: {
      posts: postsSliceReducer,
      auth: authSliceReducer
   }
});

export default store;

