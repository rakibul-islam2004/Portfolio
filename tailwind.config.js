export default {
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
