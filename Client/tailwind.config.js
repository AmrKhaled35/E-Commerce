/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
        'script': ['Parisienne', 'cursive'],
      },
      colors: {
        cream: {
          50: '#FFFDF5',
          100: '#FFF9E5',
          200: '#FFF3CC',
          300: '#FFEDB2',
          400: '#FFE799',
          500: '#FFE180',
          600: '#FFD966',
          700: '#FFCF4D',
          800: '#FFC533',
          900: '#FFBB1A',
        },
        burgundy: {
          50: '#FCF5F5',
          100: '#F9EBEB',
          200: '#F3D6D6',
          300: '#ECC2C2',
          400: '#E6ADAD',
          500: '#E09999',
          600: '#D98484',
          700: '#D37070',
          800: '#CD5B5B',
          900: '#C64747',
        },
        coffee: {
          50: '#F8F6F4',
          100: '#F1ECE9',
          200: '#E3D9D3',
          300: '#D5C5BD',
          400: '#C8B2A6',
          500: '#BA9E90',
          600: '#AC8A7A',
          700: '#9F7763',
          800: '#91634D',
          900: '#835036',
        },
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(255, 215, 0, 0.25)',
      },
    },
  },
  plugins: [],
};