import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	profile: {
		position: 'relative',
		width: '100%',
		zIndex: 999,
		overflow: 'hidden',
		padding: 40,
		marginTop: 80,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	top: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 30,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: '50%',
		marginRight: 20,
		border: '1px solid #e1e1e1',
	},
	email: {
		color: theme.palette.text.disabled,
	},
	bottom: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: 700,
		padding: 30,
	},
	inputGroup: {
		display: 'flex',
		alignItems: 'center',
		gap: 40,
		marginBottom: 40,
		width: '100%',
	},
	input: {
		flex: 1,

		'&::placeholder': {},

		'& .MuiFormLabel-root': {
			color: theme.palette.text.primary,
		},
	},
	sex: {
		flex: 1,
		'& .MuiFormGroup-root': {
			flexDirection: 'row',
			alignItems: 'center',
		},
	},
	tableHead: {
		fontSize: 15,
		fontWeight: 500,
		backgroundColor: '#f7f7f7',
	},
	cellProduct: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		marginBottom: 20,
	},
	searchBar: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		marginBottom: 20,
	},
	searchField: {
		flex: 1,

		'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
			borderRadius: '0',
		},
		'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
			borderRadius: '0',
		},
		'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
			borderRadius: '0',
		},
	},
	searchBtn: {
		height: 56,
		width: 100,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,
		borderRadius: 0,

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.text.secondary,
		},
	},
}))

export { useStyles }
