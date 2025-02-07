import React, { useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context/ThemeContext";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "PortfolioR1k12u1",
        "protfolior1k12u1",
        e.target,
        "n0mTymYDlCY80h1a0"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "bottom-right", // Use string position
            autoClose: 3000, // Customize the auto close time
          });
        },
        (error) => {
          toast.error("Failed to send the message. Please try again!", {
            position: "bottom-right", // Use string position
            autoClose: 3000, // Customize the auto close time
          });
        }
      );
    e.target.reset(); // Reset the form after sending
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

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const slideInAnimation = {
    animation: inView ? "slideIn 1s ease-out" : "none",
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
  };

  return (
    <div
      ref={ref}
      className={`${themeColors.bg} p-8 transition-all duration-1000`}
      id="contact"
      style={slideInAnimation}
    >
      <h2 className={themeColors.heading}>Contact Me</h2>
      <form onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`w-full p-2 rounded ${themeColors.inputBg} border ${themeColors.inputBorder} ${themeColors.inputText} transition-all duration-300`}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={`w-full p-2 rounded ${themeColors.inputBg} border ${themeColors.inputBorder} ${themeColors.inputText} transition-all duration-300`}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className={`w-full p-2 rounded ${themeColors.inputBg} border ${themeColors.inputBorder} ${themeColors.inputText} transition-all duration-300`}
          required
        ></textarea>
        <button
          type="submit"
          className={`w-full ${themeColors.buttonBg} p-2 rounded text-white transition-all duration-300 hover:opacity-80`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
