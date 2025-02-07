import React, { useState, useEffect } from "react";
import { useRef, useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/ThemeContext";

const projects = [
  {
    name: "Library Management System",
    image: "/project1.jpg",
    description:
      "A full-stack library system using React, Node.js, and MongoDB.",
    liveLink: "https://your-library-project.com",
    githubLink: "https://github.com/yourusername/library-management",
    techStack: "React, Node.js, MongoDB",
  },
  {
    name: "Product Hunt Website",
    image: "/project2.jpg",
    description: "A platform to discover and share tech products.",
    liveLink: "https://your-product-hunt.com",
    githubLink: "https://github.com/yourusername/product-hunt",
    techStack: "React, Firebase, MongoDB",
  },
  {
    name: "Gaming Tournament Platform",
    image: "/project3.jpg",
    description: "A website to manage eSports tournaments.",
    liveLink: "https://your-gaming-platform.com",
    githubLink: "https://github.com/yourusername/gaming-tournament",
    techStack: "React, Node.js, MongoDB",
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const textColors =
    theme === "dark"
      ? {
          heading: "text-white",
          text: "text-gray-300",
          subText: "text-gray-400",
          link: "text-blue-300 hover:underline",
        }
      : {
          heading: "text-black",
          text: "text-gray-800",
          subText: "text-gray-700",
          link: "text-blue-600 hover:underline",
        };

  return (
    <section id="projects" className="min-h-screen py-16 px-6 lg:px-20">
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-8 ${textColors.heading}`}>
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-primary p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className={`text-xl font-bold mb-2 ${textColors.heading}`}>
                {project.name}
              </h3>
              <p className={`text-sm mb-2 ${textColors.text}`}>
                {project.description}
              </p>
              <p className={`text-sm font-semibold ${textColors.subText}`}>
                {project.techStack}
              </p>
              <div className="flex justify-center space-x-6 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className={`font-semibold ${textColors.link}`}
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className={`font-semibold ${textColors.link}`}
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
