/** @type {import('tailwindcss').Config} */
import daisyui from './node_modules/daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/programming-hero-web-course2/b10-a10-client-side-nure-alam-riyal.git
// git push -u origin main
