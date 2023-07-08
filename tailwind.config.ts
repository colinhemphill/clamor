import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// @ts-ignore
import windyRadixPlugin from 'windy-radix-palette';
// @ts-ignore
import { toRadixVars } from 'windy-radix-palette/vars';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  plugins: [
    windyRadixPlugin({}),
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('group-hocus', [
        ':merge(.group):hover &',
        ':merge(.group):focus &',
      ]);
    }),
  ],
  theme: {
    extend: {
      colors: {
        primary: toRadixVars('red'),
        primaryContrast: '#ffffff',
        secondary: toRadixVars('cyan'),
        secondaryContrast: '#000000',
        neutral: toRadixVars('mauve'),
      },
      fontFamily: {
        body: ['var(--font-inter)'],
        heading: ['var(--font-raleway)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          '2xl': '10rem',
        },
      },
    },
  },
} satisfies Config;
