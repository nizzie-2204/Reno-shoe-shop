import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	home: {
		position: 'relative',
		// marginTop: 80,
		marginLeft: 300,
		padding: 40,
		backgroundColor: '#f5f6fa',
	},
	tableHead: {
		fontSize: 15,
		fontWeight: 500,
		backgroundColor: '#b7b7b7',
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
		marginBottom: 40,
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
	add: {
		height: 56,
		width: 120,
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.secondary,
		borderRadius: 0,
		marginLeft: 40,
		'&:hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.text.secondary,
		},
	},
	productDesc: {
		maxWidth: 200,
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
	},
	emptyImg: {
		width: 150,
		height: 150,
		marginBottom: 10,
	},
	emptyTitle: {
		fontSize: 24,
	},
	emptyContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
}))

export { useStyles }
