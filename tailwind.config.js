/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F1A501",
        accent: "#DF6951",
        light: "#FFF1DA",
        dblue: "#181E4B",
        faded: "#5E6282",
        sblue: "#5E6282"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          
        },
      },
      borderRadius: {
        '10': '10px', // Custom border radius
      },
    },
  },
  plugins: [],
}

