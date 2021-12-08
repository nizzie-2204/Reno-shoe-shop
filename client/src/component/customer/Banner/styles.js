import { makeStyles } from '@material-ui/styles'
import bgBanner from '../../../assets/images/hero-1.jpg'
import bgBanner2 from '../../../assets/images/hero-2.jpg'
import bgBanner3 from '../../../assets/images/hero-3.jpg'
import bgBanner4 from '../../../assets/images/hero-4.jpg'

const useStyles = makeStyles((theme) => ({
	banner: {
		position: 'relative',
		width: '100%',
		height: 700,
		zIndex: 999,
		overflow: 'hidden',

		'& .react-multi-carousel-track': {
			height: 700,
		},
	},
	slide: {
		position: 'absolute',
		content: "''",
		width: '100%',
		height: 700,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		zIndex: 999,
		backgroundImage: `url(${bgBanner})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 100%',
		padding: '0 120px',
		[theme.breakpoints.down('md')]: {
			alignItems: 'center',
		},
	},
	slide2: {
		backgroundImage: `url(${bgBanner2})`,
	},
	slide3: {
		backgroundImage: `url(${bgBanner3})`,
	},
	slide4: {
		backgroundImage: `url(${bgBanner4})`,
	},
	heading: {
		fontSize: 70,
		fontWeight: 700,
		[theme.breakpoints.down('md')]: {
			fontSize: 38,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 26,
		},
	},
	subHeading: {
		fontSize: 30,
		fontWeight: 500,
		marginBottom: 50,
		[theme.breakpoints.down('md')]: {
			fontSize: 26,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 18,
		},
	},
	action: {
		width: 190,
		color: '#f1f1f1',
		backgroundColor: theme.palette.primary.main,
		borderRadius: 30,
		padding: '11px 0',
		transition: '0.3s',
		'&:hover': {
			backgroundColor: '#ebebeb',
			color: theme.palette.text.primary,
			boxShadow: '0 5px 5px -2px rgb(0 0 0 / 50%)',
		},
	},
}))

export { useStyles }
