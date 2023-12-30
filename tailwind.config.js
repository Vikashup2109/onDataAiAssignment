/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(183deg, #EAF5FF 2.45%, #FFF 97.55%)",
      },
    },
  },
  plugins: [],
};
