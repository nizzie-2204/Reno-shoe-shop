import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
const FeaturedInfo = () => {
	const classes = useStyles()
	return (
		<Box className={classes.featured}>
			<Box className={classes.featuredItem}>
				<Typography component="span" className={classes.featuredTitle}>
					Revenue
				</Typography>
				<Box classTypographyName={classes.featuredMoneyContainer}>
					<Typography component="span" className={classes.featuredMoney}>
						$1
					</Typography>
					<Typography component="span" className={classes.featuredMoneyRate}>
						{/* %{Math.floor(perc)} */}
						{/* {perc < 0 ? ( */}
						{/* <ArrowDownward className={classes.featuredIcon negative} /> */}
						{/* ) : ( */}
						{/* <ArrowUpward className={classes.featuredIcon} /> */}
						{/* )} */}
					</Typography>
				</Box>
				<span className={classes.featuredSub}>Compared to last month</span>
			</Box>
			<Box className={classes.featuredItem}>
				<span className={classes.featuredTitle}>Orders</span>
				<Box className={classes.featuredMoneyContainer}>
					<Typography component="span" className={classes.featuredMoney}>
						$4,415
					</Typography>
					<Typography component="span" className={classes.featuredMoneyRate}>
						{/* -1.4 <ArrowDownward className={classes.featuredIcon negative} /> */}
					</Typography>
				</Box>
				<span className={classes.featuredSub}>Compared to last month</span>
			</Box>
			<Box className={classes.featuredItem}>
				<Typography component="span" className={classes.featuredTitle}>
					Customers
				</Typography>
				<Box className={classes.featuredMoneyContainer}>
					<Typography component="span" className={classes.featuredMoney}>
						$2,225
					</Typography>
					<Typography component="span" className={classes.featuredMoneyRate}>
						+2.4
						{/* <ArrowUpward className={classes.featuredIcon} /> */}
					</Typography>
				</Box>
				<Typography component="span" className={classes.featuredSub}>
					Compared to last month
				</Typography>
			</Box>
		</Box>
	)
}

export default FeaturedInfo
