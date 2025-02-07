import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion"; // Import framer-motion for animation

const handleScroll = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full shadow-md p-4 flex justify-between items-center z-50 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      key={theme} // Key will trigger the animation on theme change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-bold">
        <a href="#" onClick={(e) => handleScroll(e, "#home")}>
          Portfolio
        </a>
      </h1>
      <ul className="hidden md:flex gap-4">
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, "#skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full transition-all duration-300"
      >
        {theme === "dark" ? (
          <FiSun size={24} className="text-yellow-400" />
        ) : (
          <FiMoon size={24} className="text-gray-600" />
        )}
      </button>
    </motion.nav>
  );
};

export default Navbar;
