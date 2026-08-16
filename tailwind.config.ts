import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#080A0F',
        deep: '#0D1117',
        surface: '#131921',
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96A',
          dim: 'rgba(201,168,76,0.35)',
          border: 'rgba(201,168,76,0.18)',
        },
        cream: '#F0EAD8',
        white: '#FAFAF8',
        muted: 'rgba(240,234,216,0.45)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-instrument)', 'sans-serif'],
        mono: ['var(--font-plex)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;