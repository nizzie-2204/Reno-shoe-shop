import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
		marginLeft: 300,
		padding: 40,
		backgroundColor: '#f5f6fa',
	},
	content: {
		display: 'flex',
		gap: 20,
	},
	heading: {
		fontSize: 30,
		fontWeight: 600,
		marginBottom: 30,
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: 350,
	},
	uploadContainer: {
		marginBottom: 20,
	},
	uploadBtn: {
		backgroundColor: '#ddd',
		marginLeft: 20,
	},
	inputGroup: {
		marginBottom: 30,
		color: theme.palette.text.primary,

		'& .MuiInputLabel-outlined': {
			color: theme.palette.text.primary,
		},
	},
	carousel: {
		padding: 30,
		flex: 1,

		'& .carousel .slide img': {
			height: 420,
			objectFit: 'cover',
		},

		'& .carousel.carousel-slider': {
			border: '2px solid #e1e1e1',
			borderRadius: 15,
		},

		'& .carousel .thumb': {
			border: '2px solid #e1e1e1',
			borderRadius: 15,
		},

		'& .carousel .thumb.selected': {
			border: '2px solid #a1a1a1',
		},

		'& .carousel .thumbs-wrapper': {
			margin: '20px 0',
		},
	},
	saveBtn: {
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
	inStock: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30,
	},
}))

export { useStyles }
