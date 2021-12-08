import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	chart: {
		margin: 20,
		padding: 20,
		backgroundColor: theme.palette.common.white,
		boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
	},

	chartTitle: {
		marginBottom: 20,
	},
}))

export { useStyles }
