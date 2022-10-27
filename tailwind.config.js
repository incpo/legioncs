/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('assets/imgs/backall.png')",
        'main': "url('assets/imgs/main.jpg')",
        'rules': "url('assets/imgs/rules.jpg')",
      }
    },
  },
  plugins: [],
}
