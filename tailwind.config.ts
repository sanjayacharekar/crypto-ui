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
      colors:{
        'bg-color':'#c2cde8',
        'nav-font-color':'#280e5f',
        'purple-1':'#cebaf8',
        'purple-2':'#9a6aff',
        'purple-3':'#7644d8',
        'nav-icon-bg':'#7a6fab',
        'nav-icon-bg-disabled':'#e9eaeb'
      }
    },
  },
  plugins: [],
};
export default config;
