/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        referbg: "url('assets/og-image-yield.png')",
      // 'dashImg': "url('https://res.cloudinary.com/dr6a80sph/image/upload/v1735421427/z5fkks4voa5nr7jz7jgr.jpg')"
      },
      colors: {
        dashbg: "#222736",
        dashcont: "#2a3042"
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "infinite-scroll": {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(calc(-50% - 20px))"}
        },
        
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        "infinite-scroll": "infinite-scroll 40s linear infinite",
        "infinite-scroll-img": "infinite-scroll 5s linear infinite"
      },
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

