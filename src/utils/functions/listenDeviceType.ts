interface DeviceSelectFunctions {
  setDesktop: Function;
  setMobile: Function;
  setTablet: Function;
}

export const setupMediaListeners = (dispatch: Function, deviceSelect: DeviceSelectFunctions) => {
  const { setDesktop, setMobile, setTablet } = deviceSelect;

  const listenBreakpoint = (min: number, max?: number) => {
    const setDeviceType = () => {
      if (max! <= 600) dispatch(setMobile(min));
      if (max! <= 1024 && max! > 600) dispatch(setTablet(min));
      if (min >= 1024) dispatch(setDesktop(min));
    };

    if (max && window.matchMedia(`(${min}px < width <= ${max}px)`).matches) setDeviceType();
    if (!max && window.matchMedia(`(${min}px < width)`).matches) setDeviceType();
  };

  const setUserDevice = () => {
    listenBreakpoint(0, 400);
    listenBreakpoint(400, 500);
    listenBreakpoint(500, 600);
    listenBreakpoint(600, 800);
    listenBreakpoint(800, 1024);
    listenBreakpoint(1200, 1400);
    listenBreakpoint(1400, 1650);
    listenBreakpoint(1650, 1800);
    listenBreakpoint(1800);

  };
  
  setUserDevice();
  window.addEventListener("resize", setUserDevice);
};
