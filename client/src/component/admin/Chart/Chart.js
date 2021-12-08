import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import { Line } from 'react-chartjs-2'

const data = {
	labels: ['1', '2', '3', '4', '5', '6'],
	datasets: [
		{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			fill: false,
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgba(255, 99, 132, 0.2)',
		},
	],
}

const options = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
}

const Chart = () => {
	const classes = useStyles()

	return (
		<Box className={classes.chart}>
			<Typography component="h3" className={classes.chartTitle}>
				Users Analytics
			</Typography>
			<Line data={data} options={options} />
		</Box>
	)
}

export default Chart
