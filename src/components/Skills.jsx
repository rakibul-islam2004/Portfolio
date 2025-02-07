import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare, FaPython } from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="skills"
      className={`p-6 pt-20 pb-20 text-center transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold">Skills</h2>
      <motion.div
        className="flex justify-center gap-6 mt-4 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Viewport trigger
        viewport={{ once: true, amount: 0.3 }} // Runs once when 30% is visible
      >
        {[
          {
            icon: <FaReact size={40} className="text-blue-500" />,
            name: "React",
          },
          {
            icon: <FaNodeJs size={40} className="text-green-500" />,
            name: "Node.js",
          },
          {
            icon: <SiTailwindcss size={40} className="text-teal-400" />,
            name: "Tailwind CSS",
          },
          {
            icon: <FaNodeJs size={40} className="text-gray-700" />,
            name: "Express.js",
          },
          { icon: <SiC size={40} className="text-green-600" />, name: "C" },
          {
            icon: <SiCplusplus size={40} className="text-blue-600" />,
            name: "C++",
          },
          {
            icon: <FaJsSquare size={40} className="text-yellow-500" />,
            name: "JavaScript",
          },
          {
            icon: <FaPython size={40} className="text-blue-500" />,
            name: "Python",
          },
          {
            icon: <SiMongodb size={40} className="text-green-600" />,
            name: "MongoDB",
          },
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
