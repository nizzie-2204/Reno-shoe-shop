import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.primary.dark,
		padding: '80px 100px',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	heading: {
		fontSize: 19,
		fontWeight: 700,
		marginBottom: 40,
		color: theme.palette.text.secondary,
		textTransform: 'uppercase',
	},
	listLink: {
		fontSize: 14,
		marginBottom: 25,
		color: 'grey',
	},
	listImg: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 'auto',
	},
	img: {
		width: 50,
		height: 30,
		borderRadius: 0,
	},
	email: {
		fontSize: 14,
		color: theme.palette.text.secondary,
		'& .MuiOutlinedInput-input': {
			padding: '12.5px 14px',
		},
		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderBottomColor: theme.palette.common.white,
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderBottomColor: theme.palette.common.white,
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderBottomColor: theme.palette.common.white,
		},
		'&::placeholder': {
			color: theme.palette.text.secondary,
			fontSize: 14,
		},
	},
	action: {
		marginTop: 20,
		padding: '11px 30px',
		fontSize: 16,
		fontWeight: 600,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,
		borderRadius: 30,
		transition: '0.3s',
		'&:hover': {
			color: '#303253',
			backgroundColor: theme.palette.background.paper,
		},
	},
}))

export { useStyles }
