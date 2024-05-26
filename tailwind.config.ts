module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				body: "#000000",
				"selected-text": "#FFD700",
				theme: "#FFD700",
				secondary: "#9191A4",
				badge: "#3F3F51",
				inputBorder: "#565666",
				input: "#2A2A33",
			},
			fontFamily: {
				poppins: ["Poppins, sans-serif"],
			},
		},
	},
	plugins: [],
};
