import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import HireMe from "./components/HireMe";
import Cursor from "./components/Cursor";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark min-h-screen" : "light min-h-screen"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <HireMe darkMode={darkMode} />
      {/* <Contact darkMode={darkMode} /> */}
      <Cursor />
    </div>
  );
}

export default App;