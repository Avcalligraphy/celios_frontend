import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      navMobile: "1444px",
      contactLayout: "501px",
      radarLayout: "400px",
      csm: "640px",
      cmd: "768px",
      clg: "1024px",
      cxl: "1280px",
      cxxl: "1536px",
      clxl: "1735px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
