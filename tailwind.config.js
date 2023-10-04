/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			spacing: {
				"big":"48rem"
			}
		},
		fontFamily: {
			nunito: ['Nunito', 'sans-serif'],
			caveat: ['Caveat', 'cursive']
		},
		screens: {
			sm:"390px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		
	},
	plugins: [require("flowbite/plugin")]
};
