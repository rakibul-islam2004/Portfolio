import { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  // Define shadow color dynamically based on the theme
  const shadowColor =
    theme === "dark"
      ? "shadow-sm shadow-gray-800"
      : "shadow-lg shadow-gray-100";

  return (
    <div className={theme}>
      <div className={`${shadowColor} rounded-lg transition-all`}>
        <Navbar />
      </div>
      <div className={`${shadowColor} rounded-lg transition-all`}>
        <Hero />
      </div>
      <div className={`${shadowColor} rounded-lg transition-all`}>
        <About />
      </div>
      <div className={`${shadowColor}  rounded-lg transition-all`}>
        <Skills />
      </div>
      <div className={`${shadowColor} rounded-lg transition-all`}>
        <Projects />
      </div>
      <div className={`${shadowColor} rounded-lg transition-all`}>
        <Contact />
      </div>
      <div className={`${shadowColor} rounded-lg transition-all`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
