import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f4f7ee',
          100: '#e7edda',
          500: '#557042',
          700: '#254b2b',
          800: '#153b22',
          900: '#0d2d1c'
        },
        bark: {
          100: '#f4ead8',
          300: '#d8bd91',
          500: '#9a7040',
          700: '#5d3c23'
        },
        paper: '#fbf7ec',
        ink: '#2b2219',
        moss: '#6f8350'
      },
      boxShadow: {
        soft: '0 12px 34px rgba(82, 61, 33, 0.11)',
        card: '0 6px 14px rgba(61, 48, 30, 0.08)'
      },
      fontFamily: {
        sans: ['"Hiragino Sans"', '"Yu Gothic"', '"Meiryo"', 'system-ui', 'sans-serif'],
        mincho: ['"Yu Mincho"', '"Hiragino Mincho ProN"', 'serif'],
        hand: ['"Hiragino Maru Gothic ProN"', '"Yu Gothic"', '"Meiryo"', 'sans-serif']
      },
      backgroundImage: {
        paper: "radial-gradient(circle at 20% 18%, rgba(120, 90, 47, 0.065), transparent 18%), radial-gradient(circle at 82% 12%, rgba(61, 105, 49, 0.08), transparent 20%), linear-gradient(180deg, #fffaf0 0%, #f8f0df 100%)"
      }
    }
  },
  plugins: []
};

export default config;
