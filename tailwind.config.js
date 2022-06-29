/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        nav: "0px 15px 10px -15px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: "#6D83F2",
        primary_light: "#74b9ff",
        secondary: "#FFF0FF",
        base: "#F8F8F8",
      },
    },

    fontSize: {
      sm: "0.875rem",
      lg: "1.25rem",
      xl: "2.5rem",
    },
  },
  plugins: [],
};
