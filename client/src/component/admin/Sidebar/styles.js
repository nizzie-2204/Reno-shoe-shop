import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	sidebar: {
		flex: 1,
		height: 'calc(100vh - 50px)',
		borderRight: '1px solid #ebeef2',
		position: 'fixed',
		top: 80,
		maxWidth: 300,
		width: 300,
	},

	sidebarWrapper: {
		padding: '20px 0`',
		color: '#555',
	},

	sidebarMenu: {
		marginBottom: 10,
	},

	sidebarTitle: {
		fontSize: 20,
		paddingLeft: 10,
		color: 'rgb(187, 186, 186)',
	},

	sidebardIcon: {
		marginRight: 20,
	},

	link: {
		fontSize: 20,
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		transition: '0.3s',
		color: theme.palette.text.primary,
		borderRadius: 6,

		'&.active > li': {
			backgroundColor: 'rgb(240, 240, 255)',
		},

		'& .MuiListItem-root': {
			transition: '0.3s',
			borderRadius: 6,
			padding: '10px 20px',

			'&:hover': {
				textDecoration: 'none',
				backgroundColor: 'rgb(240, 240, 255)',
				borderRadius: 6,
			},
		},
	},

	sidebarList: {
		padding: 10,
	},

	sidebarListItem: {
		padding: 5,
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		borderRadius: 10,
	},

	//   .sidebarListItem.active,
	//   sidebarListItem:hover {
	// 	,
	//   },

	sidebarIcon: {
		marginRight: 5,
		fontSize: '20px !important',
	},
}))

export { useStyles }
