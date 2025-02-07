import { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close the mobile menu when clicked outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const menuItemStyles =
    theme === "dark"
      ? "text-white hover:bg-gray-700"
      : "text-black hover:bg-gray-200";
  const mobileMenuStyles =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full shadow-md p-4 flex justify-between items-center z-50 transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white backdrop-blur-lg"
          : "bg-white text-black backdrop-blur-md"
      }`}
      key={theme} // Key will trigger the animation on theme change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-bold text-blue-500">
        <a href="#" onClick={(e) => handleScroll(e, "#home")}>
          Rakibul
        </a>
      </h1>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex gap-4">
        <li>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className={menuItemStyles}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={(e) => handleScroll(e, "#skills")}
            className={menuItemStyles}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "#projects")}
            className={menuItemStyles}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className={menuItemStyles}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Navbar Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-full z-50" // Add z-index to ensure button stays on top
      >
        {isMobileMenuOpen ? (
          <FiX size={24} className="text-gray-600" />
        ) : (
          <FiMenu size={24} className="text-gray-600" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          className={`absolute top-16 left-0 w-full shadow-md md:hidden z-40 mt-2 transition-all duration-300 ${mobileMenuStyles}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(31, 41, 55, 0.7)"
                : "rgba(255, 255, 255, 0.7)", // Apply transparency
          }}
        >
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className={menuItemStyles}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleScroll(e, "#skills")}
                className={menuItemStyles}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className={menuItemStyles}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className={menuItemStyles}
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}

      {/* Theme Switcher */}
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
