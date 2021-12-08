import { Box } from '@material-ui/core'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import AdminLayout from '../../../component/admin/AdminLayout/AdminLayout'
import Chart from '../../../component/admin/Chart/Chart'
import FeaturedInfo from '../../../component/admin/FeaturedInfo/FeaturedInfo'
import { useStyles } from './styles'

const Home = () => {
	const classes = useStyles()
	return (
		<>
			<Helmet>
				<title>Reno - Admin</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<AdminLayout>
				<Box className={classes.home}>
					<FeaturedInfo />
					<Chart />
				</Box>
			</AdminLayout>
		</>
	)
}

export default Home
