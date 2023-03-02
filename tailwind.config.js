/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#212529",
        medium: "#adb5bd",
        mediumAlt: "rgb(209 213 219)",
        light: "#f8f9fa",
      },
      backgroundImage: {
        "about-pattern": "url(/src/img/bgImage.png)",
      },
    },
  },
  plugins: [],
};
