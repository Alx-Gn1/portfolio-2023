import { createSlice } from "@reduxjs/toolkit";

export interface DeviceState {
  userDevice: string;
  deviceWidth: number;
  parallaxMultiplier: number;
}

const initialState: DeviceState = {
  userDevice: "desktop",
  deviceWidth: 1920,
  parallaxMultiplier: 1,
};

export const userDeviceSlice = createSlice({
  name: "userDevice",
  initialState,
  reducers: {
    setDesktop: (state, action) => {
      state.deviceWidth = action.payload;
      state.userDevice = "desktop";
      state.parallaxMultiplier = 1;
    },
    setMobile: (state, action) => {
      state.deviceWidth = action.payload;
      state.userDevice = "mobile";
      state.parallaxMultiplier = 0;
    },
    setTablet: (state, action) => {
      state.userDevice = "tablet";
      state.parallaxMultiplier = 0.5;
    },
  },
});

export const { setDesktop, setMobile, setTablet } = userDeviceSlice.actions;

export default userDeviceSlice.reducer;
