/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        redi: "#D81F26",
        white: "#F5F6FF",
        garyi: "#717489",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["inter", "sans-self"],
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
