/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7F3DFF",
        primaryLight: "#F8F5FF",
        gray: "#F4F4F5",
        defaultText: "#847E8F",
      },
    },
  },
  plugins: [],
};
