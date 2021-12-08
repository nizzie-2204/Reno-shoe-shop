import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	lastestProducts: {
		padding: 40,
		position: 'relative',
		width: '100%',
		zIndex: 999,
		overflow: 'hidden',
		marginTop: 80,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
	list: {
		// padding: '0 24px',
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
	heading: {
		fontSize: 30,
		fontWeight: 700,

		[theme.breakpoints.down('md')]: {
			fontSize: 26,
		},

		[theme.breakpoints.down('sm')]: {
			marginBottom: 20,
		},
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
	filter: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'no-wrap',
		marginBottom: 50,
		padding: '0 20px',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	textField: {
		width: 200,
		marginLeft: 20,

		'& .MuiInputLabel-outlined': {
			color: theme.palette.text.primary,
		},

		[theme.breakpoints.down('md')]: {
			width: 140,
		},

		[theme.breakpoints.down('sm')]: {
			width: 200,
		},
	},
	selectHeading: {
		fontSize: 20,
		fontWeight: 500,
	},
	pagition: {
		margin: '30px 0',

		'& .MuiPaginationItem-root': {
			fontSize: 16,
			backgroundColor: 'transparent',
			borderColor: 'transparent',
			margin: '0 5px',
			padding: '0 8px',

			'&:hover': {
				backgroundColor: '#ebebeb',
			},
		},

		'& .MuiPaginationItem-page.Mui-selected': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.text.secondary,
			padding: '0 8px',
			margin: '0 5px',

			'&:hover': {
				backgroundColor: theme.palette.primary.main,
			},
		},
	},
	select: {
		display: 'flex',
		alignItems: 'center',
	},
	loadingContainer: {
		margin: '130px 0',
	},
	empty: {
		fontSize: 20,
		fontWeight: 500,
		width: '100%',
		textAlign: 'center',
		padding: '100px 0',
	},
	watermark: {
		position: 'absolute',
		top: '40%',
		left: '50%',
		transform: 'translate(-50%, -40%)',
		padding: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		color: theme.palette.text.secondary,
		borderRadius: 15,
		fontSize: 20,
		zIndex: 999,
	},
}))

export { useStyles }
