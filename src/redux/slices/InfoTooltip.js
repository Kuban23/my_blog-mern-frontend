import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stateToolTip: null,
};

const ToolTipSlice = createSlice({
  name: 'ToolTip',
  initialState,
  reducers: {
    SetStateToolTip: (state, action) => {
      state.stateToolTip = action.payload;
      console.log(action.payload);
    },
    //   reducers: {
    //     SetStateToolTip: (state, action) => {
    //       state.stateToolTip = action.payload;
    //       //console.log(action.payload)
    //     },
  },
});

export const { SetStateToolTip } = ToolTipSlice.actions;
export default ToolTipSlice.reducer;
