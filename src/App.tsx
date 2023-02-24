import Header from "./components/Header";
import { useState } from "react";
import setAppTheme from "./utils/functions/setAppTheme";
import About from "./components/About";
import IntroSection from "./components/IntroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useAppDispatch } from "./app/hooks";
import { setupMediaListeners } from "./utils/functions/listenDeviceType";
import { setDesktop, setMobile, setTablet } from "./app/Slices/userDeviceSlice";

function App() {
  const [theme, setTheme] = useState("light");
  const dispatch = useAppDispatch();
  setupMediaListeners(dispatch, { setDesktop, setMobile, setTablet });

  setAppTheme(theme);
  return (
    <ParallaxProvider>
      <div className="App">
        <Header theme={theme} setTheme={setTheme} />
        <IntroSection />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
