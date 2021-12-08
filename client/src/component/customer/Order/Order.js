import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@material-ui/core'
import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrder } from '../../../redux/slices/orderSlice'
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import { useStyles } from './styles'

const Order = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.auth.user)

	const [orders, setOrders] = useState([])
	const [value, setValue] = useState('')

	const handleRadioChange = (event) => {
		setValue(event.target.value)
		// setError(false);
	}

	useEffect(() => {
		const fetchOrder = () => {
			const action = getAllOrder(user._id)
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					setOrders(res.orders)
				})
		}
		fetchOrder()
	}, [])
	return (
		<>
			<Helmet>
				<title>Reno - Shop</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<Box className={classes.profile}>
					<Typography variant="h3" className={classes.heading}>
						Order details
					</Typography>
					{/* <Box className={classes.searchBar}>
						<TextField
							placeholder="Search for order ID"
							variant="outlined"
							className={classes.searchField}
						/>
						<IconButton className={classes.searchBtn}>
							<BiSearchAlt2 />
						</IconButton>
					</Box> */}
					<TableContainer
						component={Paper}
						elevation="0"
						style={{ marginBottom: 25 }}
					>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell align="center" className={classes.tableHead}>
										Order ID
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Created Date
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Delivery Price
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Delivery Status
									</TableCell>
									<TableCell align="center" className={classes.tableHead}>
										Payment method
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{orders.length > 0 &&
									orders.map((order) => (
										<TableRow>
											<TableCell
												component="th"
												scope="row"
												className={classes.cellProduct}
												align="center"
											>
												<Typography component="body2">{order._id}</Typography>
											</TableCell>
											<TableCell align="center">
												{new Date(order.createdAt).toLocaleString()}
											</TableCell>
											<TableCell align="center">${order.totalPrice}</TableCell>
											<TableCell align="center">{order.status}</TableCell>
											<TableCell align="center">
												{order.paymentMethod.toString()}
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</CustomerLayout>
		</>
	)
}

export default Order
