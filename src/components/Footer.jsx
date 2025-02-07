import React, { useState, useEffect } from "react";
import { useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const themeColors =
    theme === "dark"
      ? {
          bg: "bg-gray-900",
          text: "text-gray-100",
        }
      : {
          bg: "bg-blue-300",
          text: "text-gray-900",
        };

  return (
    <footer className={`${themeColors.bg} ${themeColors.text} text-center p-4`}>
      © 2025 Rakibul Islam | All Rights Reserved
    </footer>
  );
};

export default Footer;
