import { createSlice } from "@reduxjs/toolkit";

export interface DeviceState {
  userDevice: string;
  deviceWidth: number;
}

const initialState: DeviceState = {
  userDevice: "desktop",
  deviceWidth: 1920,
};

export const userDeviceSlice = createSlice({
  name: "userDevice",
  initialState,
  reducers: {
    setDesktop: (state, action) => {
      state.deviceWidth = action.payload;
      state.userDevice = "desktop";
    },
    setMobile: (state, action) => {
      state.deviceWidth = action.payload;
      state.userDevice = "mobile";
    },
    setTablet: (state, action) => {
      state.userDevice = "tablet";
    },
  },
});

export const { setDesktop, setMobile, setTablet } = userDeviceSlice.actions;

export default userDeviceSlice.reducer;
