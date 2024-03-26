import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "./Loco.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

const App = () => {
  const containerRef = useRef(null);
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default App;
