import { makeStyles } from '@material-ui/styles'
import menCg from '../../../assets/images/category-men.jpg'
import womenCg from '../../../assets/images/category-women.jpg'
const useStyles = makeStyles((theme) => ({
	card: {
		height: 250,
		backgroundImage: `url(${womenCg})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		padding: '35px',
		transition: '0.5s',
		cursor: 'pointer',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		margin: 40,

		'&::before': {
			position: 'absolute',
			content: "''",
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background:
				'linear-gradient(180deg, rgba(109,73,194,1) 0%, rgba(4,3,3,1) 100%)',
			zIndex: -1,
			transition: '0.5s',
			opacity: 0,
		},

		'&:hover': {
			transform: 'scale(1.1)',
			boxShadow: '0 10px 10px rgb(0 0 0 / 50%)',
		},

		'&:hover $heading': {
			color: theme.palette.text.secondary,
		},

		'&:hover $action': {
			color: theme.palette.text.secondary,
			transform: 'translateY(0) scale(1)',
			opacity: 1,
		},

		'&:hover $action::before': {
			transform: 'scale(1)',
			opacity: 1,
		},

		'&:hover::before': {
			opacity: 0.5,
		},
	},
	customCard: {
		backgroundImage: `url(${menCg})`,
	},
	heading: {
		fontSize: 30,
		fontWeight: 600,
	},
	action: {
		fontSize: 16,
		fontWeight: 600,
		textTransform: 'capitalize',
		marginTop: 'auto',
		alignSelf: 'flex-start',
		padding: 0,
		borderRadius: 0,
		transform: 'translateY(20px) scale(0)',
		opacity: 0,
		transition: '0.5s',
		position: 'relative',

		'&::before': {
			position: 'absolute',
			content: "''",
			bottom: -3,
			left: 0,
			height: 3,
			background: theme.palette.background.paper,
			transition: '0.9s',
			transformOrigin: 'center',
			transform: 'scale(0)',
			width: '100%',
			opacity: 0,
		},

		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
}))

export { useStyles }
