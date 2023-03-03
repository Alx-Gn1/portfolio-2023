import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import setAppTheme from "./utils/functions/setAppTheme";
import About from "./components/About";
import IntroSection from "./components/IntroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useAppDispatch, useAppSelector } from "./app/hooks";
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
    <ParallaxProvider>
      <Header />
      <IntroSection />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
