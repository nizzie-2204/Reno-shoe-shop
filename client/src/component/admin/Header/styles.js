import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	topbar: {
		width: '100%',
		height: 80,
		backgroundColor: '#fff',
		position: 'sticky',
		top: 0,
		zIndex: 999,
		borderBottom: '1px solid #ebeef2',
	},

	topbarWrapper: {
		height: '100%',
		padding: '0px 20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	logo: {
		fontWeight: 'bold',
		fontSize: 30,
		color: 'darkblue',
		cursor: 'pointer',
	},

	topRight: {
		display: 'flex',
		alignItems: 'center',
	},

	topbarIconContainer: {
		position: 'relative',
		cursor: 'pointer',
		marginRight: 10,
		color: '#555',
	},

	topIconBadge: {
		width: 15,
		height: 15,
		position: 'absolute',
		top: -5,
		right: 0,
		backgroundColor: 'red',
		color: 'white',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 10,
	},

	topAvatar: {
		width: 30,
		height: 30,
		borderRadius: '50%',
		cursor: 'pointer',
	},
}))

export { useStyles }
