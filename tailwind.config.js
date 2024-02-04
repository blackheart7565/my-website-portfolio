/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"blue-1000": "#0A1437",
				"blue-1100": "#051A4C",
			},
			boxShadow: {
				burgerMenuBtn: "inset 0px 0px 5px  rgba(1, 2, 30, 1)",
			},
		},
		backgroundImage: {
			gradientHeaderTitle: "linear-gradient(205deg, #26366F 19%, rgba(183,68,159,1) 69%, rgba(144,215,246,1) 86%)",
			gradientShadowHeader: " linear-gradient(0deg, rgba(1, 2, 30, 1) 0%, rgba(0, 0, 0, 0) 25%)",
		},
	},
	plugins: [],
}

