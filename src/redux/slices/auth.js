import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
   const res = await axios.post('/auth/login', params)
   return res.data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
   const res = await axios.get('/auth/me',)
   return res.data;
});

export const fetchRegiater = createAsyncThunk('auth/fetchRegiater', async (params) => {
   const res = await axios.post('/auth/register', params);
   return res.data;
});

const initialState = {
   data: null,
   status: 'isloading'
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         state.data = null
      },
   },

   extraReducers: {
      [fetchAuth.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchAuth.fulfilled]: (state, action) => {
         state.status = 'saccess';
         state.data = action.payload;
      },
      [fetchAuth.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      },

      [fetchAuthMe.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchAuthMe.fulfilled]: (state, action) => {
         state.status = 'saccess';
         state.data = action.payload;
      },
      [fetchAuthMe.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      },

      [fetchRegiater.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchRegiater.fulfilled]: (state, action) => {
         state.status = 'saccess';
         state.data = action.payload;
      },
      [fetchRegiater.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      },
   }

});

export default authSlice.reducer;
export const { logout } = authSlice.actions;