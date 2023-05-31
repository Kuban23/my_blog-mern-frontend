import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

// асинхронный экшн для дальнего использования- буду делать запрос на БЭК получение постов
export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
   const res = await axios.get('/posts');
   return res.data;
});

// асинхронный экшн для дальнего использования- буду делать запрос на БЭК получение тэгов
export const fetchTags = createAsyncThunk('/posts/fetchTags', async () => {
   const res = await axios.get('/tags');
   return res.data;
});

// асинхронный экшн для дальнего использования- буду удалять посты
export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', (id) => {
   axios.delete(`/posts/${id}`);
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

   // Подучаю статьи
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

      // Подучаю тэги
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

      // Удаляю статьи
      [fetchRemovePost.pending]: (state, action) => {
         state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg);
      },
   }

});

export default postsSlice.reducer;