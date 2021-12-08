import {
	Box,
	Button,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BiPencil, BiSearchAlt2, BiX } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import AdminLayout from '../../../component/admin/AdminLayout/AdminLayout'
import { getAllOrder } from '../../../redux/slices/orderSlice'
import AddEditOrder from './AddEditOrder/AddEditOrder'
import { useStyles } from './styles'

const Order = () => {
	const classes = useStyles()
	const orders = useSelector((state) => state.order.orders)
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchOrders = () => {
			const action = getAllOrder()
			dispatch(action)
		}
		fetchOrders()
		console.log(orders)
	}, [])

	// Modal
	const [open2, setOpen2] = useState(false)
	const [updateOrder, setUpdateOrder] = useState()
	const handleOpen2 = (order) => {
		setUpdateOrder(order)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setOpen2(false)
	}

	// Search
	const [filteredOrders, setFilteredOrders] = useState(orders)
	const searchRef = useRef('')
	const handleChangeSearch = (e) => {
		const value = e.target.value
		console.log(value)
		console.log(value)
		if (searchRef.current) {
			clearTimeout(searchRef.current)
		}

		searchRef.current = setTimeout(() => {
			if (value === '') setFilteredOrders(orders)

			const filtered = orders.filter((order) => {
				return order.status
					.toString()
					.toLowerCase()
					.includes(value.toLowerCase())
			})
			setFilteredOrders(filtered)
		}, 400)
	}

	const handleDeleteOrder = (id) => {
		console.log(id)
	}
	return (
		<>
			<Helmet>
				<title>Reno - Admin</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<AdminLayout>
				<Box className={classes.home}>
					<Box className={classes.searchBar}>
						<TextField
							placeholder="Search for status"
							variant="outlined"
							className={classes.searchField}
							ref={searchRef}
							onChange={handleChangeSearch}
						/>
						<IconButton className={classes.searchBtn}>
							<BiSearchAlt2 />
						</IconButton>
						<Button className={classes.add}>Add Order</Button>
					</Box>
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
										Actions
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{filteredOrders?.map((order) => (
									<TableRow>
										<TableCell
											component="th"
											scope="row"
											className={classes.cellProduct}
											align="center"
										>
											<Typography component="span">{order._id}</Typography>
										</TableCell>
										<TableCell align="center">
											{new Date(order.createdAt).toLocaleString()}
										</TableCell>
										<TableCell align="center">${order.totalPrice}</TableCell>
										<TableCell align="center">
											{order.status.toString()}
										</TableCell>
										<TableCell align="center">
											<BiPencil
												style={{
													cursor: 'pointer',
													fontSize: 20,
													marginRight: 20,
												}}
												onClick={() => handleOpen2(order)}
											/>
											<BiX
												style={{ cursor: 'pointer', fontSize: 20 }}
												onClick={() => {
													handleDeleteOrder(order._id)
												}}
											/>
										</TableCell>
									</TableRow>
								))}
								<AddEditOrder
									open={open2}
									handleClose={handleClose2}
									order={updateOrder}
								/>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</AdminLayout>
		</>
	)
}

export default Order
