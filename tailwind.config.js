/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hunyadi_yellow: { DEFAULT: "#f6bd60" },
        linen: { DEFAULT: "#f7ede2" },
        tea_rose_red: { DEFAULT: "#f5cac3" },
        cambridge_blue: { DEFAULT: "#84a59d" },
        light_coral: { DEFAULT: "#f28482" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Literata", "Georgia", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        soft: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
