/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        background: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
          dark: '#050505',
        }
      },
      animation: {
        'aurora': 'aurora 20s linear infinite',
        'aurora-float': 'auroraFloat 15s ease-in-out infinite alternate',
        'aurora-pulse': 'auroraPulse 20s ease-in-out infinite alternate',
        'aurora-wave': 'auroraWave 25s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 5s ease-in-out infinite alternate',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        auroraFloat: {
          '0%': { transform: 'translateY(-50%) translateX(-10%)' },
          '50%': { transform: 'translateY(-55%) translateX(0%)' },
          '100%': { transform: 'translateY(-50%) translateX(10%)' },
        },
        auroraPulse: {
          '0%': { opacity: 0.2, transform: 'translateY(25%) scale(1)' },
          '50%': { opacity: 0.3, transform: 'translateY(30%) scale(1.1)' },
          '100%': { opacity: 0.2, transform: 'translateY(25%) scale(1)' },
        },
        auroraWave: {
          '0%': { transform: 'translateY(50%) translateX(-5%)' },
          '50%': { transform: 'translateY(55%) translateX(5%)' },
          '100%': { transform: 'translateY(50%) translateX(-5%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%': { opacity: 0.3, transform: 'scale(1)' },
          '100%': { opacity: 1, transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}