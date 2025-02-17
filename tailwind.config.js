/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        //notice the convenient naming...
        gray: colors.slate,
        pink: colors.pink,
        green: colors.teal,
        purple: colors.indigo,
        blue: colors.blue,

        lightBg: colors.slate[100],
        lightAccBg: colors.indigo[100],
        darkText: colors.slate[950],
        discordLight: colors.indigo[400],

        // Dark Mode Colors
        darkBg: colors.slate[950],
        darkAccBg: colors.slate[800],
        lightText: colors.slate[50],
        discordDark: colors.white,
      },
      backgroundImage: {
        'hero-pattern': "url('/images/skeleton_loader.png')",
      },
    },
    fontFamily: {
      birzia: ['Birzia', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '34px',
      '4xl': '48px',
      '5xl': '60px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: ['bg-gradient-to-r'],
};
