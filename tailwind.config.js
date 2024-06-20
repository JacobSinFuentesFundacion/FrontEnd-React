/** @type {import('tailwindcss').Config} */
const {nextui} = require('@nextui-org/react');

module.exports = {
	content: [
		'./src/**/*.{html,js,jsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				slideUp: {
					'0%': {
						transform: 'translateY(0%)',
						opacity: 1,
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: 0,
					},
				},
				slideDown: {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: 0,
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: 1,
					},
				},
				animation: {
					slideUp: 'slideUp 0.5s ease-in-out forwards',
					slideDown: 'slideDown 0.5s ease-in-out forwards',
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
