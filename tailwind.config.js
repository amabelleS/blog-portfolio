/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        // 'strawberry-gradient-hover': 'bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
        // 'strawberry-gradient': 'bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400',
        // 'teal-to-lime': 'bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
    // screens: {
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }

      // 'sm': {'max': '639px'},
      // // => @media (max-width: 639px) { ... }
    // },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
