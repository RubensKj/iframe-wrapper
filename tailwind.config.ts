/* eslint-disable import/no-anonymous-default-export */
// @ts-check
import { createPreset, presets } from 'fumadocs-ui/tailwind-plugin';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
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
  			mono: ['var(--font-geist-mono)']
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
  			'repeat-gradient-to-r': 'repeating-linear-gradient(to right, var(--tw-gradient-stops))',
  			'repeat-gradient-to-br': 'repeating-linear-gradient(to bottom right, var(--tw-gradient-stops))'
  		},
  		keyframes: {
  			stroke: {
  				from: {
  					'stroke-dasharray': '1000'
  				},
  				to: {
  					'stroke-dasharray': '1000',
  					'stroke-dashoffset': '2000'
  				}
  			}
  		},
  		animation: {
  			stroke: 'stroke 5s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [animate, require("tailwindcss-animate")],
};