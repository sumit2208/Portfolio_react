/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/flowbite/**/*.js", 
  ],
  theme: {
    extend: {
      boxShadow: {
        '3d': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
