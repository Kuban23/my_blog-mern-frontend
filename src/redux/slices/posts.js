import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
   const {data} = await axios.get('http://localhost:4444/posts');
   return data;
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
   }

});

export default postsSlice.reducer;