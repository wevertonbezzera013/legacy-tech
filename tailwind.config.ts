import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-blue": "#00040C",
      "green-blue": "#06FFCB",
      "deep-blue": "#111827",
      "primary-blue": "#0059E5",
      "light-blue": "#00B1FF",
      "bg-blue": "#101827",
      "secondary-txt": "#101827",
      "form-blue": "#0095D7",
      "circle-blue": "#13337A1A",
      "light-green": "#49B69F",
      one: "#546EAA1A",
      "baby-light": "#9FD6FF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
