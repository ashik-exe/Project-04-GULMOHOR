/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#173B35',
          hover: '#1F4D45',
          light: '#EBF1EE',
          border: '#9BB2A7',
          muted: '#2E5A52',
          900: '#112D28',
          950: '#0C201C',
        },
        ivory: {
          DEFAULT: '#F7F4ED',
          50: '#FCFBF8',
          100: '#F7F4ED',
          200: '#EFECE2',
          300: '#E5E1D5',
          400: '#D8D3C4',
        },
        sand: {
          DEFAULT: '#E8E0D2',
          light: '#F4EFE6',
          border: '#D8CEBE',
          dark: '#C8BCAB',
        },
        neutralSoft: '#E8E0D2',
        charcoal: {
          DEFAULT: '#222B28',
          950: '#171E1C',
          900: '#222B28',
          850: '#283330',
          800: '#323E3A',
          700: '#46534F',
          600: '#5C6964',
          500: '#737B73',
          400: '#949E94',
          300: '#B8C0B8',
          200: '#D5DAD4',
          100: '#EAECE9',
        },
        coral: {
          DEFAULT: '#C85A32',
          hover: '#B24E2B',
          light: '#FDF2EE',
          border: '#F3CEBE',
          muted: '#9E3F1F',
        },
        champagne: {
          DEFAULT: '#C5A66B',
          light: '#F8F4EC',
          border: '#E2D3B8',
          dark: '#A5864C',
          muted: '#7E663B',
        },
        sage: {
          DEFAULT: '#899888',
          light: '#F2F5F1',
          border: '#C7D1C6',
          dark: '#586757',
        },
      },
      fontFamily: {
        serifEng: ['Fraunces', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sansEng: ['"DM Sans"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        serifBn: ['"Noto Serif Bengali"', 'serif'],
        sansBn: ['"Hind Siliguri"', 'sans-serif'],
        displayBn: ['"Anek Bangla"', '"Noto Serif Bengali"', 'serif'],
        tiroBn: ['"Tiro Bangla"', '"Noto Serif Bengali"', 'serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.08em',
        'loose-editorial': '0.12em',
        'editorial-eyebrow': '0.08em',
        'editorial-caps': '0.05em',
      },
      boxShadow: {
        'subtle': '0 2px 12px -2px rgba(34, 43, 40, 0.05), 0 1px 4px -1px rgba(34, 43, 40, 0.02)',
        'editorial': '0 10px 30px -4px rgba(34, 43, 40, 0.07), 0 4px 10px -2px rgba(34, 43, 40, 0.03)',
        'modal': '0 25px 60px -15px rgba(23, 30, 28, 0.4)',
      }
    },
  },
  plugins: [],
}
