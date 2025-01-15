/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#45f882",
        orange: "#ffbe18",
      },
      screens: {
        xsm:"300px",
        sm: "460px",
        xl: "1200px",
        //   md: "992px",
        //   lg: "1250px",
      },
      fontFamily: {
        berlin: "berlin",
      },
    },
  },
  plugins: [],
};
