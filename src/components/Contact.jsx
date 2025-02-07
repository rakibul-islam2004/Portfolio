import React, { useState, useEffect } from "react";
import { useRef, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_id", "template_id", e.target, "user_id").then(
      (result) => {
        alert("Message sent!");
      },
      (error) => {
        alert("Failed to send!");
      }
    );
    e.target.reset();
  };

  const themeColors =
    theme === "dark"
      ? {
          bg: "bg-gray-900",
          inputBg: "bg-gray-700",
          inputBorder: "border-gray-600",
          buttonBg: "bg-blue-500",
          text: "text-white",
          heading: "text-2xl text-center font-bold mb-4",
          inputText: "text-white",
        }
      : {
          bg: "bg-blue-100",
          inputBg: "bg-gray-100",
          inputBorder: "border-gray-300",
          buttonBg: "bg-blue-600",
          text: "text-gray-900",
          heading: "text-2xl text-center font-bold mb-4 text-gray-800",
          inputText: "text-gray-900",
        };

  return (
    <div className={`${themeColors.bg} p-8`} id="contact">
      <h2 className={themeColors.heading}>Contact Me</h2>
      <form onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`w-full p-2 rounded ${themeColors.inputBg} border ${themeColors.inputBorder} ${themeColors.inputText}`}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={`w-full p-2 rounded ${themeColors.inputBg} border ${themeColors.inputBorder} ${themeColors.inputText}`}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={`w-full p-2 rounded ${themeColors.inputBg} border ${themeColors.inputBorder} ${themeColors.inputText}`}
          required
        ></textarea>
        <button
          type="submit"
          className={`w-full ${themeColors.buttonBg} p-2 rounded text-white`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
