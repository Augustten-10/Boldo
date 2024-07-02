/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "Open Sans",
      },
      backgroundColor: {
        darkBlue: "#0A2640",
        teal: "#65E4A3",
      },
      textColor: {
        white: "#ffffff",
        darkBlue: "#0A2640",
        teal: "#65E4A3",
        offWhite: "#F1F1F1",
        greyish: "#777777",
        greenish: "#4FE9A4",
      },
      borderColor: {
        darkBlue: "#0A2640",
      },
    },
  },
  plugins: [],
};
