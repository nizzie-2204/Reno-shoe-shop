import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	featured: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		overflow: 'hidden',
		marginBottom: 40,
	},

	featuredItem: {
		flex: 1,
		margin: '0px 20px',
		padding: 30,
		borderRadius: 10,
		cursor: 'pointer',
		// -webkit-box-shadow: '0 0 15 -10 rgba(0, 0, 0, 075)',
		boxShadow: '0 0 15px -10px rgba(0, 0, 0, 075)',
		backgroundColor: theme.palette.common.white,
	},

	featuredTitle: {
		fontSize: 20,
	},

	featuredMoneyContainer: {
		margin: '10px 0ox',
		display: 'flex',
		alignItems: 'center',
	},

	featuredMoney: {
		fontSize: 30,
		fontWeight: 600,
	},

	featuredMoneyRate: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 20,
	},

	featuredIcon: {
		fontSize: 14,
		marginLeft: 5,
		color: 'green',
	},

	featuredIconnegative: {
		color: 'red',
	},

	featuredSub: {
		fontSize: 15,
		color: 'gray',
	},
}))

export { useStyles }
