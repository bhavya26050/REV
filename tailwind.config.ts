import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extend custom colors for dark and light modes
        lightBg: '#f3f4f6',
        darkBg: '#1f2937',
        lightText: '#111827',
        darkText: '#f9fafb',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
    },
  },
  plugins: [],
};

export default config;
