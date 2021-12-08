import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 8, 8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	input: {
		width: 200,
		marginBottom: 30,
		'& .MuiInputLabel-outlined': {
			color: theme.palette.text.primary,
		},
	},
	save: {
		width: '100%',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,
		borderRadius: 0,
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.text.secondary,
		},
	},
	error: {
		width: 350,
		color: '#c74a47',
		backgroundColor: '#fbe2e2',
		fontSize: '16px',
		textAlign: 'left',
		padding: '10px 15px',
		marginBottom: 20,
	},
}))

export { useStyles }
