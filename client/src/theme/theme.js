import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
	palette: {
		common: {
			white: '#fff',
		},
		background: {
			default: '#fafafa',
			paper: '#fff',
		},
		primary: {
			light: '#1e1e2c ',
			main: '#1a202c',
			dark: '#252525',
			contrastText: '#fff',
		},
		secondary: {
			light: '#0071dc',
			main: '#1a138c',
			contrastText: '#fff',
		},
		text: {
			primary: '#1a202c',
			secondary: '#fff',
			disabled: '#999',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 450,
			md: 600,
			lg: 900,
			xl: 1200,
		},
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
	},
})

export default theme
