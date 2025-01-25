/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "33%, 66%": { transform: "rotate(-8deg)" },
          "16%, 50%, 84%": { transform: "rotate(8deg)" },
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
          primary: "#181C14",
          secondary: "#3C3D37",
          accent: "#697565",
          neutral: "#ECDFCC",
          "base-100": "#181C14",
          "base-200": "#3C3D37",
          "base-300": "#697565",
          "base-content": "#ECDFCC",
          info: "#697565",
          success: "#3C3D37",
          warning: "#ECDFCC",
          error: "#E57373",
        },
      },
      "light",
      "dark",
    ],
  },
};
