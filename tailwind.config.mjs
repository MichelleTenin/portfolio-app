/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'), // add this line
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake"], // optional theme selection
      },
  }