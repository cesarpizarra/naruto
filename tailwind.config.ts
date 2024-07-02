import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#09090b",
        darkSecondary: "#18181b",
        primary: "#f97316",
      },
      fontFamily: {
        naruto: ["Naruto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
