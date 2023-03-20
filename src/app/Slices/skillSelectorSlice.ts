import { createSlice } from "@reduxjs/toolkit";

export interface skillState {
  selectedSkill: null | string;
}

const initialState: skillState = {
  selectedSkill: null,
};

export const skillSelectorSlice = createSlice({
  name: "skillSelector",
  initialState,
  reducers: {
    selectSkill: (state, action) => {
      state.selectedSkill = action.payload;
    },
  },
});

export const { selectSkill } = skillSelectorSlice.actions;

export default skillSelectorSlice.reducer;
