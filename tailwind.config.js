/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Hepta Slab"],
      serif: ["Hepta Slab"],
      display: ["Hepta Slab"],
      body: ["Hepta Slab"],
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1440px",
        "3xl": "1520px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
