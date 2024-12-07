/** @type {import('tailwindcss').Config} */
import daisyui from './node_modules/daisyui'
export default {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'railway': ["Raleway","serif"],
      'rancho': ["Rancho", "serif"],
      
    },
    extend: {
      backgroundImage: {
        's1': "url('/src/assets/images (16).jpg')",
        's2': "url('/src/assets/images (7).jpg')",
        's3': "url('/src/assets/images (11).jpg')",
        's4': "url('/src/assets/images (12).jpg')",
        'sce3':"url('/src/assets/pexels-pixabay-358042.jpg')"
        
      }
    },
  },
  plugins: [daisyui],
}
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/programming-hero-web-course2/b10-a10-client-side-nure-alam-riyal.git
// git push -u origin main
