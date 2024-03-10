/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        sm: '50px',
        md: '100px',
        lg: '128px',
      },
    },
    screens: {
      sm: '375px',
      // => @media (min-width: 375px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      'primary-text-color': '#121417',
      'btn-text-color': '#fff',
      'desc-text-color': 'rgba(18, 20, 23, 0.5)',
      'after-desc-element': 'rgba(18, 20, 23, 0.2)',
      'accent-color': ' #3470ff',
      'accent-hover-color': ' #0b44cd',
      'background-img': ' #f3f3f2',
      'background-img-gr': 'rgba(18, 20, 23, 0.5)',
      'background-btn-modal': '#f9f9f9',
      'modal-text-color': '#363535',
      'stroke-color': 'rgba(255, 255, 255, 0.8)',
    },
  },
  plugins: [],
};
