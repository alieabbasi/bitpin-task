/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
        marquee: "marquee 150s linear infinite"
      },
      keyframes: {
        // Header logo animation
        wiggle: {
          "33%, 66%": { transform: "rotate(-8deg)" },
          "16%, 50%, 84%": { transform: "rotate(8deg)" },
        },
        // Main page market carousel animation
        marquee: {
          "0%": { transform: "translateX(60%)" },
          "100%": { transform: "translateX(-1000%)" },
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customtheme: {
          primary: "#121311",
          secondary: "#32332f",
          accent: "#38c67d",
          neutral: "#ECDFCC",
          "base-100": "#121311",
          "base-200": "#32332f",
          "base-300": "#697565",
          "base-content": "#ECDFCC",
          info: "#697565",
          success: "#32332f",
          warning: "#ECDFCC",
          error: "#E57373",
        },
      },
      "light",
      "dark",
    ],
  },
};
