import { Button, TextField, Typography } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { addSize, updateSize } from '../../../../redux/slices/sizeSlice'
import { useStyles } from './styles'

const AddEditSize = ({ open, handleClose, size }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { register, handleSubmit, reset } = useForm()
	const [error, setError] = useState('')

	const handleAddSize = (data) => {
		const action = addSize(data)
		dispatch(action)
			.unwrap()
			.then((res) => {
				handleClose()
				setError('')
				reset()
				toast('Add size successfully!', {
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
				setError('Name has already been taken')
			})
	}

	const handleEditSize = (data) => {
		const action = updateSize(data)
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
				setError('Name has already been taken')
			})
	}

	useEffect(() => {
		reset(size)
	}, [size])
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
						onSubmit={handleSubmit(size ? handleEditSize : handleAddSize)}
					>
						<TextField
							label="Size"
							variant="outlined"
							required
							className={classes.input}
							defaultValue={size?.name}
							{...register('name')}
						/>
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

export default AddEditSize
