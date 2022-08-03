/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./{pages,components}/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#828282",
				background: "#f2f2f2",
				// background: "#202024",
				// white: "#000",
				secondary: "#2F80ED",
				tertiary: "#333333",
				button: "#2F80ED",
				text: "#474747",
				text_2: "#bdbdbd",
			},
			fontFamily: {
				poppins: ["Poppins"],
				noto: ["Noto Sans"],
			},
		},
	},
	plugins: [],
}
