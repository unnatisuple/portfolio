/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a',
          darkblue: '#1e3a8a',
          coral: '#f97316',
          'coral-hover': '#ea580c',
          'coral-light': '#ffedd5',
          sky: '#0284c7',
          'sky-light': '#e0f2fe',
          cyan: '#06b6d4',
          cream: '#FAF7EE',
          'cream-card': '#FFFDF8',
          yellow: '#FDE047',
          'yellow-light': '#FEF9C3',
          'pastel-sky': '#E0F2FE',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        handwriting: ['"Kalam"', 'cursive'],
      },
      animation: {
        'blob-spin': 'spin 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        'glass-hover': '0 14px 40px 0 rgba(31, 38, 135, 0.14)',
        'coral-glow': '0 0 25px -5px rgba(249, 115, 22, 0.4)',
        'sky-glow': '0 0 25px -5px rgba(2, 132, 199, 0.4)',
      }
    },
  },
  plugins: [],
}
