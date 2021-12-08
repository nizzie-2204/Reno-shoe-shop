import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	notFound: {
		position: 'relative',
		width: '100%',
		height: '100vh',
		zIndex: 999,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 80,
	},
	imgContainer: {
		width: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: {
		objectFit: 'cover',
	},
	content: {
		width: '50%',

		[theme.breakpoints.down('md')]: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
	heading: {
		fontSize: 60,
		fontWeight: 600,
		marginBottom: 10,
	},
	link: {
		fontSize: 30,
		color: theme.palette.text.disabled,
		display: 'flex',
		alignItems: 'center',

		'&:last-of-type': {
			marginBottom: 20,
		},
	},
	action: {
		padding: '11px 30px',
		textTransform: 'capitalize',
		backgroundColor: '#4d79d8',
		color: theme.palette.text.secondary,
		borderRadius: 25,

		'&:hover': {
			backgroundColor: '#4d79d8',
			color: theme.palette.text.secondary,
		},
	},
}))

export { useStyles }
