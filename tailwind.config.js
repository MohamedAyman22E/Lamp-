/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    clipPath: {
      mypolygonOne: "polygon(0 0, 100% 0, 100% 94%, 0 75%)",
      mypolygonTwo: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    extend: {
      screens: {
        1430: "1430px",
        1400: "1400px",
        1300: "1300px",
        1215: "1215px",
        1205: "1205px",
        1200: "1200px",
        1100: "1100px",
        1000: "1000px",
        900: "900px",
        800: "800px",
        750: "750px",
        700: "700px",
        650: "650px",
        600: "600px",
        511: "511px",
        500: "500px",
        400: "400px",
        330: "330px",
        300: "300px",
      },
      colors: {
        firstColor: "hsl(15, 60%, 52%)",
        firstColorAlt: "hsl(15, 68%, 40%)",
        gradientOne: "hsl(15, 68%, 42%)",
        gradientTwo: "hsl(20, 68%, 80%)",
        gradientThree: "hsla(0, 0%, 86%,1)",
        gradientFour: "hsla(0, 0%, 100%,1)",
        firstGradient:
          "linear-gradient(90deg,hsl(15, 68%, 42%) 0%,hsl(20, 68%, 80%) 100%)",
        secondGradient:
          "linear-gradient(90deg,hsl(20, 72%, 57%) 0%,hsl(20, 78%, 80%) 100%)",
        thirdGradient:
          "linear-gradient(90deg,hsl(15, 70%, 40%) 0%,hsl(20, 62%, 60%) 100%)",
        forthGradient:
          "linear-gradient(180deg,hsla(0, 0, 86%,0) ,hsla(0, 0%, 100%,1) )",
        titleColor: "hsl(0, 0%, 12%)",
        homeBack: "hsl(0, 0%, 8%)",
        textColor: "hsl(0, 0%, 50%)",
        whiteColor: "#fff",
        bodyColor: "hsl(0, 0%, 96%)",
        containerColor: " hsl(0, 0%, 100%)",
        biggerFontSize: "2.25rem",
        bigFontSize: "1.5rem",
        h1FontSize: "1.5rem",
        h2FontSize: "1.25rem",
        h3FontSize: "1rem",
        normalFontSize: ".938rem",
        smallFontSize: ".813rem",
        smallerFontSize: ".75rem",
      },
      boxShadow: {
        headerShadow: "0 5px 10px  rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        fontFamilyOne: "Poppins, sans-serif",
        fontFamilyTwo: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
