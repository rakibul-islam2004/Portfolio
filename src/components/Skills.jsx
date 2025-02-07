import { FaReact, FaNodeJs, FaJsSquare, FaPython } from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si"; // MongoDB icon added
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Assuming you have a theme context

const Skills = () => {
  // Getting theme context
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="skills"
      className={`p-6 pt-20 pb-20 text-center transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white" // Dark theme: dark background, light text
          : "bg-gray-100 text-gray-900" // Light theme: white background, dark text
      }`}
    >
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex justify-center gap-6 mt-4 flex-wrap">
        <div className="flex flex-col items-center">
          <FaReact size={40} className="text-blue-500" />
          <p>React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs size={40} className="text-green-500" />
          <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss size={40} className="text-teal-400" />
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs size={40} className="text-gray-700" />
          <p>Express.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiC size={40} className="text-green-600" />
          <p>C</p>
        </div>
        <div className="flex flex-col items-center">
          <SiCplusplus size={40} className="text-blue-600" />
          <p>C++</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJsSquare size={40} className="text-yellow-500" />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPython size={40} className="text-blue-500" />
          <p>Python</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb size={40} className="text-green-600" />
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
