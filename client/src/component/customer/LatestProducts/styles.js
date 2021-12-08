import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	lastestProducts: {
		padding: '40px 0',
	},
	list: {
		padding: '0 24px',
	},
	root: {
		width: '100%',
		maxWidth: 345,
		position: 'relative',
		cursor: 'pointer',
		backgroundColor: 'transparent',

		'&:hover': {
			backgroundColor: 'transparent',
		},

		'&:hover $action': {
			opacity: 1,
			top: '50%',
		},

		'&:hover $media': {
			transform: 'scale(1.2)',
		},
	},
	media: {
		height: 250,
		transition: '0.5s',
		width: '100%',
		position: 'relative',
		zIndex: 1,
	},
	content: {
		position: 'relative',
		zIndex: 2,
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		flex: 1,
	},
	heading: {
		fontSize: 30,
		fontWeight: 700,
		textTransform: 'capitalize',
		marginBottom: 50,
	},
	topTitle: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	name: {
		fontSize: 18,
		fontWeight: 300,
		color: theme.palette.text.disabled,
	},
	bottomTitle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 'auto',
	},
	iconCart: {
		fontSize: 24,
		width: 24,
		height: 24,
		color: theme.palette.text.disabled,
		cursor: 'pointer',
		transition: '0.3s',
		marginLeft: 10,
		'&:hover': {
			color: theme.palette.text.primary,
		},
	},
	gridItem: {
		display: 'flex',
		justifyContent: 'center',
		padding: 20,
	},
	action: {
		position: 'absolute',
		content: "''",
		top: '80%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: '11px 16px',
		fontSize: 15,
		fontWeight: 600,
		backgroundColor: theme.palette.background.paper,
		color: '#303253',
		borderRadius: 30,
		opacity: 0,
		transition: '0.5s ease-out',
		boxShadow: '0 5px 5px -1px rgb(0 0 0 / 20%)',
		textTransform: 'capitalize',
		zIndex: 2,

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.text.secondary,
		},

		// '&:hover .media': {
		// 	cursor: 'pointer',
		// 	transform: 'scale(1.2)',
		// },
	},
	cardArea: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
}))

export { useStyles }
