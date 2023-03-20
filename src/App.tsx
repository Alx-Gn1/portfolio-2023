import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import setAppTheme from "./utils/functions/setAppTheme";
import About from "./components/About";
import IntroSection from "./components/IntroSection";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useAppDispatch } from "./app/hooks";
import { setupMediaListeners } from "./utils/functions/listenDeviceType";
import { setDesktop, setMobile, setTablet } from "./app/Slices/userDeviceSlice";
import { hideAddressBar } from "./utils/functions/hideAdressBar";

function App() {
  const dispatch = useAppDispatch();
  setupMediaListeners(dispatch, { setDesktop, setMobile, setTablet });

  useEffect(() => {
    hideAddressBar();
  }, []);

  return (
    <>
      <Header />
      <IntroSection />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
