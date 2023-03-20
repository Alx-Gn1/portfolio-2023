import { createSlice } from "@reduxjs/toolkit";

export interface workState {
  currentHover: number;
}

const initialState: workState = {
  currentHover: 0,
};

export const workHoverSlice = createSlice({
  name: "workHover",
  initialState,
  reducers: {
    setCurrentHover: (state, action) => {
      state.currentHover = action.payload;
    },
  },
});

export const { setCurrentHover } = workHoverSlice.actions;

export default workHoverSlice.reducer;
