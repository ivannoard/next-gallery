/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#101010",
        secondary: "#202020",
        muted: "#A49F9E",
        highlight: "#f1830d",
      },
      aspectRatio: {
        vertical: "9/16",
        "vertical-sm": "4/3",
        horizontal: "1/1",
      },
      animation: {
        swoosh_from_top_to_bottom: "swoosh-from-top-to-bottom .5s ease-in-out",
        swoosh_from_bottom_to_top: "swoosh-from-bottom-to-top .5s ease-in-out",
      },
      keyframes: {
        "swoosh-from-top-to-bottom": {
          "0%": {
            transform: "translate(0,-5%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0,0)",
            opacity: 100,
          },
        },
        "swoosh-from-bottom-to-top": {
          "100%": {
            transform: "translate(0,0)",
          },
          0: {
            transform: "translateY(0,-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
