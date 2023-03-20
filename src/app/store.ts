import workHoverSlice from "./Slices/workHoverSlice";
import skillSelectorSlice from "./Slices/skillSelectorSlice";
import userDeviceSlice from "./Slices/userDeviceSlice";

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    userDevice: userDeviceSlice,
    skillSelector: skillSelectorSlice,
    workHover: workHoverSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
