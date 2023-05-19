import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// асинхронный экшн для дальнего использования- будем делать запрос на БЭК получение постов
export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
   const res = await axios.get('http://localhost:4444/posts');
   return res.data;
});

// асинхронный экшн для дальнего использования- будем делать запрос на БЭК получение тэгов
export const fetchTags = createAsyncThunk('/posts/fetchTags', async () => {
   const res = await axios.get('http://localhost:4444/tags');
   return res.data;
});

const initialState = {
   posts: {
      items: [],
      status: 'loading',
   },
   tags: {
      items: [],
      status: 'loading',
   },
};

const postsSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {},

   extraReducers: {
      [fetchPosts.pending]: (state) => {
         state.posts.status = 'loading';
         state.posts.items = []
      },
      [fetchPosts.fulfilled]: (state, action) => {
         state.posts.status = 'saccess';
         state.posts.items = action.payload;
      },
      [fetchPosts.rejected]: (state) => {
         state.posts.status = 'error';
         state.posts.items = [];
      },

      [fetchTags.pending]: (state) => {
         state.tags.status = 'loading';
         state.posts.items = []
      },
      [fetchTags.fulfilled]: (state, action) => {
         state.tags.status = 'saccess';
         state.tags.items = action.payload;
      },
      [fetchTags.rejected]: (state) => {
         state.tags.status = 'error';
         state.tags.items = [];
      },
   }

});

export default postsSlice.reducer;