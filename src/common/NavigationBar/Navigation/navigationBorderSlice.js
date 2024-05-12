import { createSlice } from "@reduxjs/toolkit";

export const navigationBorderSlice = createSlice({
  name: "navigationBorder",
  initialState: {
    borderState: "movies",
  },
  reducers: {
    setBorder: (state, { payload: borderState }) => {
      state.borderState = borderState;
    },
  },
});

export const { setBorder } = navigationBorderSlice.actions;

export const selectBorderState = (state) => state.navigationBorder.borderState;

export default navigationBorderSlice.reducer;
