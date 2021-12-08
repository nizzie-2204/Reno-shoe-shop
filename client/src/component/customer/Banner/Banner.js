import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useStyles } from './styles'

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
}

const Banner = () => {
	const classes = useStyles()
	return (
		<Carousel
			className={classes.banner}
			responsive={responsive}
			autoPlay={true}
			autoPlaySpeed={2000}
			infinite={true}
		>
			<Box className={`${classes.slide} ${classes.slide1}`}>
				<Typography component="h1" className={classes.heading}>
					Jackets & Coats
				</Typography>
				<Typography component="h3" className={classes.subHeading}>
					Quality Matters
				</Typography>

				<Button className={classes.action}>Shop now</Button>
			</Box>
			<Box className={`${classes.slide} ${classes.slide2}`}>
				<Typography component="h1" className={classes.heading}>
					Find The Best Outfit
				</Typography>
				<Typography component="h3" className={classes.subHeading}>
					With 30% Off
				</Typography>
				<Button className={classes.action}>Shop now</Button>
			</Box>
			<Box className={`${classes.slide} ${classes.slide3}`}>
				<Typography component="h1" className={classes.heading}>
					The Best Shoes
				</Typography>
				<Typography component="h3" className={classes.subHeading}>
					Comfort For your long day
				</Typography>
				<Button className={classes.action}>Shop now</Button>
			</Box>
			<Box className={`${classes.slide} ${classes.slide4}`}>
				<Typography component="h1" className={classes.heading}>
					Next Season Is here
				</Typography>
				<Typography component="h3" className={classes.subHeading}>
					Enjoy your summer with us
				</Typography>
				<Button className={classes.action}>Shop now</Button>
			</Box>
		</Carousel>
	)
}

export default Banner
