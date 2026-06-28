/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 攏災影 KNOW ZAI 品牌識別標準色
        brand: {
          DEFAULT: "#FC961C", // Pantone 1375 C — 品牌主橘
          light: "#FDB45A",
          dark: "#CC6F0A",
          yellow: "#FFE200", // Pantone Yellow C — 標準輔色
          gray: "#727171", // Pantone Cool Gray 10 C — 輔助色
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
