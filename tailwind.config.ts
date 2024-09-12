import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          "dark-blue": "hsl(209, 23%, 22%)", // Dark Blue (Dark Mode Elements)
          "very-dark-blue-bg": "hsl(207, 26%, 17%)", // Very Dark Blue (Dark Mode Background)
          "very-dark-blue-text": "hsl(200, 15%, 8%)", // Very Dark Blue (Light Mode Text)
          "dark-gray": "hsl(0, 0%, 52%)", // Dark Gray (Light Mode Input)
          "very-light-gray": "hsl(0, 0%, 98%)", // Very Light Gray (Light Mode Background)
          white: "hsl(0, 0%, 100%)", // White (Dark Mode Text & Light Mode Elements)
        },
      },
    },
  },
  plugins: [],
};
export default config;
