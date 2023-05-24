import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
   const res = await axios.post('http://localhost:4444/auth/login', params)
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
   }

});

export default authSlice.reducer;
export const { logout } = authSlice.actions;