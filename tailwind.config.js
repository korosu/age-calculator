/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Purple: "hsl(259, 100%, 65%)",
        Light_red: "hsl(0, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        Off_white: "hsl(0, 0%, 94%)",
        Light_grey: "hsl(0, 0%, 86%)",
        Smokey_grey: "hsl(0, 1%, 44%)",
        Off_black: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
