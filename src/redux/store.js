import { configureStore } from '@reduxjs/toolkit';

import postsSliceReducer from './slices/posts';
import authSliceReducer from './slices/auth';
import ToolTipSliceReducer from './slices/InfoTooltip';

const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    auth: authSliceReducer,
    toolTip:ToolTipSliceReducer
  },
});

export default store;


