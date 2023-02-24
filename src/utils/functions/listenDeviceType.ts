interface DeviceSelectFunctions {
  setDesktop: Function;
  setMobile: Function;
  setTablet: Function;
}

export const setupMediaListeners = (dispatch: Function, deviceSelect: DeviceSelectFunctions) => {
  const { setDesktop, setMobile, setTablet } = deviceSelect;

  const setUserDevice = () => {
    if (window.matchMedia("(width < 400px)").matches) {
      dispatch(setMobile());
    } else if (window.matchMedia("(400px <= width < 500px)").matches) {
      dispatch(setMobile(400));
    } else if (window.matchMedia("(500px <= width < 600px)").matches) {
      dispatch(setMobile(500));
    } else if (window.matchMedia("(600px <= width < 1024px)").matches) {
      dispatch(setTablet());
    } else if (window.matchMedia("(1024px <= width < 1200px)").matches) {
      dispatch(setDesktop(1024));
    } else if (window.matchMedia("(1200px <= width < 1400px)").matches) {
      dispatch(setDesktop(1200));
    } else if (window.matchMedia("(1400px <= width < 1650px)").matches) {
      dispatch(setDesktop(1400));
    } else if (window.matchMedia("(1650px <= width < 1800px)").matches) {
      dispatch(setDesktop(1650));
    } else if (window.matchMedia("(1800px <= width)").matches) {
      dispatch(setDesktop(1800));
    }
  };
  setUserDevice();
  window.addEventListener("resize", setUserDevice);
};
