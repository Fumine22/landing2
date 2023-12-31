import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        check: "radial-gradient(circle, #B262F8 15%, #5439F8)",
      },
      boxShadow: {
        product: "0 3px 12px rgba(95, 92, 120, 0.12)",
        service: "0 2px 4px rgba(95, 92, 120, 0.16)",
        blog: "0 2px 6px rgba(100, 95, 136, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
