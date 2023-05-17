import { configureStore } from "@reduxjs/toolkit";

import postsSliceReducer from './slices/posts';

const store = configureStore({
   reducer: {
      posts: postsSliceReducer,
   }
});

export default store;

