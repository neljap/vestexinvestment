/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroimgone': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1704494393/sean-pollock-PhYq704ffdA-unsplash_euydwu.jpg')",
        heroimgtwo: "url('/farm-workers.jpg')",
        'heroimgthree': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1705992451/heroo_do7twv.jpg')",
        heroimgfour: "url('/oil-gas-bg.jpg')"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

