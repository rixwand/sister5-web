/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			colors: {
				primary: "#081A28",
				accent: "#B0FDAF",
				background: "#F7FBFE",
				light: "#f0f0f0",
				inactive: "#B0B0B0",
				lightpurple: "#F3E8FE",
				lightgreen: "#EBFEEA",
				lightpink: "#FEE2EF",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			}
		},
	},
	plugins: [],
}

