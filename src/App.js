import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useEffect, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./utils/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

import "./App.css";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    (() => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    })();
  }, []);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          // multiplier: 2,
          smooth: true,
          tablet: {
            breakpoint: 1365,
            smooth: true,
            direction: "vertical",
          },
          smartphone: {
            breakpoint: 767,
            smooth: true,
            direction: "vertical",
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
        <ScrollTriggerProxy />
        <AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <Home />
            <About />
            <Shop />
            <Banner />
            <NewArrival />
            <Footer />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
