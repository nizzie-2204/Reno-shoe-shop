import { Button, MenuItem, TextField, Typography } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { updateOrder } from '../../../../redux/slices/orderSlice'
import { useStyles } from './styles'

const AddEditOrder = ({ open, handleClose, order }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm()
	const [error, setError] = useState('')

	const handleEditOrder = (data) => {
		const action = updateOrder({
			id: order._id,
			status: data.status,
		})
		dispatch(action)
			.unwrap()
			.then((res) => {
				handleClose()
				setError('')
				reset()
				toast('Edit size successfully!', {
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
			.catch((error) => {
				console.log(error)
				setError(error.data.message)
			})
	}

	useEffect(() => {
		order &&
			reset({
				status: order.status.toString(),
			})
	}, [order])
	return (
		<>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={() => {
					handleClose()
					reset()
					setError('')
				}}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
				}}
			>
				<Fade in={open}>
					<form
						className={classes.paper}
						onSubmit={handleSubmit(handleEditOrder)}
					>
						<TextField
							id="select"
							select
							variant="outlined"
							className={classes.input}
							label={order ? '' : 'Price'}
							// onChange={handleChangePrice}
							InputLabelProps={{ shrink: false }}
							{...register('status')}
							defaultValue={order?.status.toString()}
						>
							<MenuItem value="Pending">Pending</MenuItem>
							<MenuItem value="Delivered">Delivered</MenuItem>
							<MenuItem value="Canceled">Canceled</MenuItem>
						</TextField>

						{error !== '' && (
							<Typography component="p" className={classes.error}>
								{error}
							</Typography>
						)}
						<Button className={classes.save} type="submit">
							Save
						</Button>
					</form>
				</Fade>
			</Modal>
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
		</>
	)
}

export default AddEditOrder
