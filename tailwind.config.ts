import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif'],
				body: ['Roboto', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#F8F9FA',
				foreground: '#333333',
				primary: {
					DEFAULT: '#074173',
					hover: '#1A5F7A',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#57C5B6',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#F3C623',
					foreground: '#333333'
				},
				teal: {
					DEFAULT: '#159895',
					light: '#57C5B6',
					dark: '#1A5F7A'
				}
			},
			fontSize: {
				'heading-lg': '36px',
				'heading-md': '30px',
				'heading-sm': '24px',
				'body': '16px',
				'body-lg': '18px',
				'small': '14px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;