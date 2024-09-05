/* eslint-disable import/no-anonymous-default-export */
// @ts-check
import { createPreset, presets } from 'fumadocs-ui/tailwind-plugin';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [
    createPreset({
      addGlobalColors: true,
      preset: {
        ...presets.default,
        light: {
          ...presets.default.dark, // Remove this in the future once it has theme provider. 
        },
        dark: {
          ...presets.default.dark,
          background: '0 0% 2%',
          foreground: '0 0% 98%',
          popover: '0 0% 4%',
          card: '0 0% 4%',
          muted: '0 0% 8%',
          border: '0 0% 14%',
          accent: '0 0% 15%',
          'accent-foreground': '0 0% 100%',
          'muted-foreground': '0 0% 60%',
        },
      },
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'repeat-gradient-to-r':
          'repeating-linear-gradient(to right, var(--tw-gradient-stops))',
        'repeat-gradient-to-br':
          'repeating-linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      keyframes: {
        stroke: {
          from: {
            'stroke-dasharray': '1000',
          },
          to: {
            'stroke-dasharray': '1000',
            'stroke-dashoffset': '2000',
          },
        },
      },
      animation: {
        stroke: 'stroke 5s linear infinite',
      },
    },
  },
  plugins: [animate],
};