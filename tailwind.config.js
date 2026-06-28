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
        // 與品牌橘同色相的橘色階（取代 Tailwind 預設橘，全站統一色相）
        orange: {
          50: "#FFF6EC",
          100: "#FEEAD0",
          200: "#FDD49E",
          300: "#FCBE6C",
          400: "#FCA844",
          500: "#FC961C",
          600: "#E07F0C",
          700: "#CC6F0A",
          800: "#A1570A",
          900: "#7C4408",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
