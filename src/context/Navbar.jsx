import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <ul className="hidden md:flex gap-4">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
