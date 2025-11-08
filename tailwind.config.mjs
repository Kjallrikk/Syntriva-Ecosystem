/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        syntrivaBg: "#050711",
        syntrivaCard: "#0B0F1F",
        syntrivaAccent: "#4ADE80"
      }
    }
  },
  plugins: []
};
