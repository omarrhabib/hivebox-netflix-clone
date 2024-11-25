import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        HivePink: {
          DEFAULT: '#C37DA2', // Base color
          dark: '#b05b88',    // Darker shade for hover
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

