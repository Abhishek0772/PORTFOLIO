/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'translate(0px,250px)' },
          '25%': { transform: 'translate(-150px,0px)' },
          '50%': { transform: 'translate(0px,-50px)' },
          '75%': { transform: 'translate(150px,0px)' },
          '100%': { transform: 'translate(0px,250px)' },
        },
        wave2: {
          '0%': { transform: 'translate(0px,-150px)' },
          '25%': { transform: 'translate(50px,0px)' },
          '50%': { transform: 'translate(0px,250px)' },
          '75%': { transform: 'translate(-150px,0px)' },
          '100%': { transform: 'translate(0px,-150px)' },
        },
        wave3: {
          '0%': { transform: 'translate(0px,-80px)' },
          '25%': { transform: 'translate(-80px,0px)' },
          '50%': { transform: 'translate(0px,80px)' },
          '75%': { transform: 'translate(80px,0px)' },
          '100%': { transform: 'translate(0px,-80px)' },
        },
      },
      animation: {
        'purple': 'wave 12s linear infinite',
        'pink': 'wave2 10s linear infinite',
        'yellow': 'wave3 11s linear infinite',
      },
    
    },
  },
  plugins: [],
}
