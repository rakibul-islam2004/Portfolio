import React, { useRef, useContext } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // Triggers every time it enters viewport
  const { theme } = useContext(ThemeContext);

  return (
    <section
      ref={ref}
      id="home"
      className={`h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <motion.h1
        className={`text-5xl font-extrabold drop-shadow-lg ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Rakibul!</span>
      </motion.h1>

      <motion.p
        className={`text-lg md:text-xl mt-2 ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Programmer & Full Stack Developer
      </motion.p>

      <motion.div
        className="mt-6 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <a
          href="https://github.com/rakibul-islam2004"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition-transform transform hover:scale-110 ${
            theme === "dark"
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          <FaGithub
            size={30}
            className={theme === "dark" ? "text-white" : "text-black"}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rakibul-islam2004/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full transition-transform transform hover:scale-110 ${
            theme === "dark"
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          <FaLinkedin
            size={30}
            className={theme === "dark" ? "text-white" : "text-black"}
          />
        </a>
      </motion.div>

      <motion.a
        href="/resume.pdf"
        download="Rakibul_Resume.pdf"
        className="mt-6 px-8 py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 transition-transform transform hover:scale-105 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;
