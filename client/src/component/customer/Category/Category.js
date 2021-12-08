import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
const Category = () => {
	const classes = useStyles()
	return (
		<Grid container justifyContent="space-between">
			<Grid item lg={4} md={6} sm={12}>
				<Paper className={classes.card}>
					<Typography component="h3" className={classes.heading}>
						Women
					</Typography>
					<Button className={classes.action}>Shop now</Button>
				</Paper>
			</Grid>
			<Grid item lg={4} md={6} sm={12}>
				<Paper className={`${classes.card} ${classes.customCard}`}>
					<Typography component="h3" className={classes.heading}>
						Men
					</Typography>
					<Button className={classes.action}>Shop now</Button>
				</Paper>
			</Grid>
			<Grid item lg={4} md={6} sm={12}>
				<Paper className={classes.card}>
					<Typography component="h3" className={classes.heading}>
						Women
					</Typography>
					<Button className={classes.action}>Shop now</Button>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default Category
