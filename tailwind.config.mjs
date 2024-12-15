/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #A478E8 0%, #516CF7 100%)',
      },
      colors: {
        gray: {
          dark: '#47516B',
          darker: '#2E2E48',
          darkest: '#232339',
          DEFAULT: '#79819A',
          light: '#ACB1C3',
          lighter: '#D9DFE8',
          lightest: '#E2E6EE',
        },
        primary: {
          dark: '#5531A7',
          light: '#C696FC',
        },
        secondary: {
          dark: '#2A337E',
          light: '#95AAFB',
          lighter: '#E1E7FE',
        },
        social: {
          linkedin: '#0077B5',
          twitter: '#00ACEE',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-primary-gradient': {
          'background-image': 'linear-gradient(90deg, #A478E8 0%, #516CF7 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
      });
	  
    },
  ],
};
