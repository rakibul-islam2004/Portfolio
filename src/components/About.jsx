import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { ThemeContext } from "../context/ThemeContext"; // Assuming you have a theme context

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return (
    <section
      id="about"
      className={`min-h-screen py-20 px-8 lg:px-24 flex items-center justify-center transition-colors duration-300 ${
        theme === "dark" ? "bg-primary text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image Section */}
        <motion.div
          className="w-64 h-80 md:w-72 md:h-96 rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1 }}
        >
          <img
            src={profileImg}
            alt="Rakibul"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text Section */}
        <motion.div
          className="md:flex-1 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Hi, I am Rakibul Islam, a student of Computer Science and
            Technology. I am a passionate{" "}
            <span className="font-semibold">Web Developer</span> with experience
            in{" "}
            <span className="font-semibold">React, Node.js, and MongoDB</span>.
            I love building interactive and high-performance applications that
            provide great user experiences.
          </p>
          <p className="text-lg leading-relaxed">
            My journey started with{" "}
            <span className="font-semibold">C, Python, and JavaScript</span>,
            and I have expanded my skills into full-stack development. I enjoy{" "}
            <span className="font-semibold">
              reading books, coding challenges, problem-solving, and learning
              new technologies
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
