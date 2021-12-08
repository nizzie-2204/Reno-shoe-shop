import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	login: {
		position: 'relative',
		width: '100%',
		height: 700,
		zIndex: 999,
		overflow: 'hidden',
	},
	img1: {
		position: 'absolute',
		content: "''",
		top: 0,
		left: 0,
		zIndex: -1,
		height: '100%',
		width: '65%',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		padding: '0 40px',
	},
	img2Container: {
		width: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img2: {
		width: 500,
	},
	form: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		[theme.breakpoints.down('md')]: {
			width: '100%',
		},
	},
	heading: {
		fontSize: 30,
		fontWeight: 700,
		textTransform: 'capitalize',
		marginBottom: 20,
	},
	subHeading: {
		fontSize: 16,
		fontWeight: 400,
		marginBottom: 20,
		color: theme.palette.text.disabled,
	},
	input: {
		fontSize: 20,
		color: theme.palette.text.disabled,
		padding: 10,
		width: 350,
		'& .MuiInput-root': {
			padding: '10px 0',
		},
		'& .MuiInput-underline:before': {
			borderBottom: '2px solid #e2e8f0',
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
			borderBottom: '2px solid #e2e8f0',
		},
	},
	inputIcon: {
		color: theme.palette.text.disabled,
		fontSize: 26,
		marginRight: -10,
	},
	action: {
		width: 350,
		height: 50,
		background: '#2254b2',
		borderRadius: 25,
		color: theme.palette.text.secondary,
		transition: '0.5s',
		marginTop: 20,
		marginBottom: 20,
		fontSize: 18,

		'&:hover': {
			background: '#2254b2',
			color: theme.palette.text.secondary,
		},
	},
	redirect: {
		color: theme.palette.text.primary,
		'&:first-of-type': {
			marginBottom: 40,
		},
		'&:last-of-type': {
			display: 'flex',
			alignItems: 'center',
		},
	},
	redirectIcon: {
		fontSize: 22,
		marginLeft: 5,
	},
}))

export { useStyles }
