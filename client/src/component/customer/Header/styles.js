import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: 'transparent',
		height: 80,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition: '0.5s',
		paddingRight: '0 !important',
	},
	activeHeader: {
		boxShadow:
			'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);',
		backgroundColor: theme.palette.background.paper,
	},
	toolbar: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		width: '20%',
		minWidth: 180,
	},
	list: {
		width: '40%',
		height: 80,
		padding: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	listLink: {
		textAlign: 'center',
		color: theme.palette.text.primary,
		fontWeight: 600,
		fontSize: 16,
		cursor: 'pointer',
		transition: '0.3s',
		position: 'relative',
		padding: 0,
		width: 'auto',

		'&::before': {
			position: 'absolute',
			content: "''",
			bottom: -7,
			left: 0,
			width: '100%',
			height: 2,
			backgroundColor: theme.palette.text.primary,
			transition: '0.5s',
			transformOrigin: 'left',
			transform: 'scale(0)',
		},

		'&:hover::before': {
			transform: 'scale(1)',
		},
	},
	actions: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 'auto',
		[theme.breakpoints.down('md')]: {
			flex: 1,
			marginLeft: 0,
		},
	},
	input: {
		width: 200,
		backgroundColor: theme.palette.background.paper,
		borderRadius: 6,
		[theme.breakpoints.down('md')]: {
			flex: 1,
		},
		'& .MuiInputLabel-outlined': {
			fontSize: 14,
			transform: 'translate(14px, 17px) scale(1)',
		},
		'& .MuiOutlinedInput-input': {
			padding: '12.5px 14px',
		},
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#e2e8f0',
			borderRadius: 6,
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderColor: '#e2e8f0',
			borderRadius: 6,
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#e2e8f0',
			borderRadius: 6,
		},
		'&::placeholder': {
			color: '#e2e8f0',
			fontWeight: 600,
		},
	},
	inputActive: {
		borderColor: '#e2e8f0',
	},
	cart: {
		fontSize: 26,
		fontWeight: 600,
		cursor: 'pointer',
	},
	signIn: {
		textTransform: 'capitalize',
		borderStyle: 'solid',
		color: '#f1f1f1',
		backgroundColor: theme.palette.primary.main,
		transition: '0.3s',
		'&:hover': {
			backgroundColor: '#ebebeb',
			color: theme.palette.text.primary,
			boxShadow: '0 5px 5px -2px rgb(0 0 0 / 50%)',
		},
	},
	email: {
		color: theme.palette.text.primary,
		textTransform: 'unset',
		fontSize: 16,

		'& .MuiButton-label': {
			cursor: 'pointer',
		},

		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	menu: {
		top: '60px !important',
		left: '1153px !important',

		'& .MuiList-root': {
			width: 120,
			padding: '10px 0',
		},
	},
	cartContainer: {
		backgroundColor: 'transparent',
		position: 'relative',
	},
	cartQuantity: {
		position: 'absolute',
		top: 4,
		right: 5,
		fontSize: 14,
		color: theme.palette.text.secondary,
		backgroundColor: theme.palette.primary.main,
		borderRadius: '50%',
		width: 18,
		height: 18,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}))

export { useStyles }
