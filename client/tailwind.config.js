/** @type {import('tailwindcss').Config} */

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      headingFont: ['"Roboto"', "sans-serif"],
      bodyFont: ['"Lora"', "serif"],
    },
  },
};
export const plugins = [];
