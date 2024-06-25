/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],

  presets: [
    require("keep-react/preset")
  ],

  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["dark"],
  },
}

