/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a2e5c", // насыщенный тёмно-синий
        accent: "#1d4ed8",  // синий акцент
        lightgray: "#f8fafc"
      }
    },
  },
  plugins: [],
}
