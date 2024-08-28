import { colors } from "./src/theme/colors.ts";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { ...colors },
    extend: {},
  },
  plugins: [],
};
