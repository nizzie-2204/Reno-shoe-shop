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
import TablePagination from '@material-ui/core/TablePagination'
import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { BiPencil, BiSearchAlt2, BiX } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import AdminLayout from '../../../component/admin/AdminLayout/AdminLayout'
import { deleteUser, getAllUser } from '../../../redux/slices/userSlice'
import AddEditUser from './AddEditUser/AddEditUser'
import { useStyles } from './styles'

const User = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const users = useSelector((state) => state.user.users)

	useEffect(() => {
		const fetchUsers = () => {
			const action = getAllUser()
			dispatch(action)
		}
		fetchUsers()
	}, [])

	// Modal
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const [updateUser, setUpdateUser] = useState()
	const [open2, setOpen2] = useState(false)
	const handleOpen2 = (user) => {
		setUpdateUser(user)
		setOpen2(true)
	}
	const handleClose2 = () => {
		setOpen2(false)
	}

	// Search
	const [filteredUsers, setFilteredUsers] = useState(users)
	const searchRef = useRef('')
	const handleChangeSearch = (e) => {
		const value = e.target.value

		if (searchRef.current) {
			clearTimeout(searchRef.current)
		}

		searchRef.current = setTimeout(() => {
			if (value === '') setFilteredUsers(users)

			const filtered = users.filter((user) => {
				return user.fullName.toLowerCase().includes(value.toLowerCase())
			})
			console.log(filtered)
			setFilteredUsers(filtered)
		}, 400)
	}

	// Pagination
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const handleDeleteUser = (id) => {
		const action = deleteUser(id)
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				toast('Delete user successfully!', {
					position: 'bottom-center',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					type: 'success',
				})
			})
	}
	return (
		<>
			<Helmet>
				<title>Reno - Admin</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<AdminLayout>
				<form className={classes.home}>
					<Box className={classes.searchBar}>
						<TextField
							placeholder="Search for fullname"
							variant="outlined"
							className={classes.searchField}
							ref={searchRef}
							onChange={handleChangeSearch}
						/>
						<IconButton className={classes.searchBtn}>
							<BiSearchAlt2 />
						</IconButton>
						<Button className={classes.add} onClick={handleOpen}>
							Add User
						</Button>
						<AddEditUser open={open} handleClose={handleClose} />
					</Box>
					{filteredUsers?.length > 0 ? (
						<>
							<TableContainer
								component={Paper}
								elevation="0"
								style={{ marginBottom: 25 }}
							>
								<Table className={classes.table} aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell align="center" className={classes.tableHead}>
												Fullname
											</TableCell>
											<TableCell align="center" className={classes.tableHead}>
												Email
											</TableCell>
											<TableCell align="center" className={classes.tableHead}>
												Created Date
											</TableCell>
											<TableCell align="center" className={classes.tableHead}>
												Updated Date
											</TableCell>
											<TableCell align="center" className={classes.tableHead}>
												Actions
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{filteredUsers.map((user) => {
											return (
												<TableRow>
													<TableCell
														component="th"
														scope="row"
														className={classes.cellProduct}
														align="center"
													>
														{user.fullName}
													</TableCell>
													<TableCell align="center">{user.email}</TableCell>
													<TableCell align="center">
														{new Date(user.createdAt).toLocaleString()}
													</TableCell>
													<TableCell align="center">
														{new Date(user.updatedAt).toLocaleString()}
													</TableCell>
													<TableCell align="center">
														<BiPencil
															style={{
																cursor: 'pointer',
																fontSize: 20,
																marginRight: 20,
															}}
															onClick={() => {
																handleOpen2(user)
															}}
														/>
														<BiX
															style={{ cursor: 'pointer', fontSize: 20 }}
															onClick={() => {
																handleDeleteUser(user._id)
															}}
														/>
													</TableCell>
												</TableRow>
											)
										})}
										<AddEditUser
											open={open2}
											handleClose={handleClose2}
											user={updateUser}
										/>
									</TableBody>
								</Table>
							</TableContainer>
							<TablePagination
								component="div"
								count={users.length}
								rowsPerPageOptions={[10]}
								page={page}
								onPageChange={handleChangePage}
								rowsPerPage={rowsPerPage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</>
					) : (
						<Box className={classes.emptyContainer}>
							<img
								src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png"
								alt=""
								className={classes.emptyImg}
							/>
							<Typography component="p" className={classes.emptyTitle}>
								It's empty in here
							</Typography>
						</Box>
					)}
				</form>
				<ToastContainer
					position="bottom-center"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					type="default"
				/>
			</AdminLayout>
		</>
	)
}

export default User
