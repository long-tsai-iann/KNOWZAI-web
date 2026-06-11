/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FB8C00",
          light: "#FFB74D",
          dark: "#EF6C00",
        },
      },
    },
  },
  plugins: [],
};
