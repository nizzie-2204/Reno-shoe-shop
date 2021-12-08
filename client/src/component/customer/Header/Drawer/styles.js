import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: 240,
		flexShrink: 0,
	},
	drawerPaper: {
		width: 240,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
		marginBottom: 6,
	},
	list: {
		width: '40%',
		justifyContent: 'space-around',
	},
	listDropdownLink: {
		color: theme.palette.text.primary,
		fontWeight: 600,
		fontSize: 16,
		cursor: 'pointer',
		marginBottom: 20,
	},
	listDropdown: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
}))

export { useStyles }
