import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	MenuItem,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import AdminLayout from '../../../../component/admin/AdminLayout/AdminLayout'
import { getAllCategory } from '../../../../redux/slices/categorySlice'
import {
	addProduct,
	updateProduct,
	upload,
} from '../../../../redux/slices/productSlice'
import { getAllSize } from '../../../../redux/slices/sizeSlice'
import { useStyles } from './styles'

const icon = <BiCheckbox />
const checkedIcon = <BiCheckboxChecked />

const AddEditProduct = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const location = useLocation()
	const categories = useSelector((state) => state.category.categories)
	const sizes = useSelector((state) => state.size.sizes)
	const { register, handleSubmit, reset, control } = useForm()
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = () => {
			const action = getAllCategory()
			dispatch(action)

			const action2 = getAllSize()
			dispatch(action2)
		}
		fetchData()
	}, [])

	// autocomplete
	const [value, setValue] = useState([])

	// Handle select multiple images
	const [imagesDisplay, setImagesDisplay] = useState([])
	const [imagesUpload, setImagesUpload] = useState([])

	useEffect(() => {
		if (location.state) {
			reset({
				name: location.state.name,
				desc: location.state.desc,
				price: location.state.price,
				quantity: location.state.quantity,
				inStock: location.state.inStock.toString(),
			})
			setImagesDisplay(() => {
				return location.state.images.map((image) => {
					return image
				})
			})
			setValue(location.state.size)
		}
	}, [location.state])

	const handleOnChangePictures = (e) => {
		const files = e.target.files
		const arrImagesPreview = []
		const arrImagesUpload = []

		Array.from(files)?.forEach((file) => {
			const image = { preview: URL.createObjectURL(file) }
			arrImagesPreview.push(image)
			arrImagesUpload.push(file)
		})
		setImagesDisplay(arrImagesPreview)
		setImagesUpload(arrImagesUpload)
	}

	useEffect(() => {
		return () => {
			imagesDisplay?.length > 0 &&
				imagesDisplay.forEach((image) => {
					URL.revokeObjectURL(image.preview)
				})
		}
	}, [imagesDisplay])

	// handle product
	const handleAddProduct = (data) => {
		console.log(data)
		if (imagesUpload.length === 0) {
			setError('Images are required')
			return
		}

		if (value.length === 0) {
			console.log(value)
			setError('Sizes are required')
			return
		}

		const action = upload(imagesUpload)
		dispatch(action)
			.then(unwrapResult)
			.then((res) => {
				const product = { ...data, size: sizes, images: res }
				const action = addProduct(product)
				dispatch(action)
					.then(unwrapResult)
					.then(() => {
						reset()
						setImagesUpload([])
						setImagesDisplay([])
						setError('')
						setValue([])
						toast('Add product successfully!', {
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
					.catch((error) => setError('Name has already been taken'))
			})
			.catch((error) => console.log(error))
	}

	const handleEditProduct = (data) => {
		if (imagesUpload.length === 0) {
			// Not change images
			const sizes = value.map((size) => {
				return size._id
			})
			const product = { ...data, size: sizes, _id: location.state._id }
			const action = updateProduct(product)
			dispatch(action)
				.then(unwrapResult)
				.then(() => {})
				.catch((error) => setError('Name has already been taken'))
		} else {
			const action = upload(imagesUpload)
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					const product = {
						...data,
						size: sizes,
						_id: location.state._id,
						images: res,
					}
					const action = updateProduct(product)
					dispatch(action)
						.then(unwrapResult)
						.then(() => {
							toast('Update product successfully!', {
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
						.catch((error) => setError('Name has already been taken'))
				})
				.catch((error) => console.log(error))
		}
	}

	return (
		<>
			<Helmet>
				<title>Reno - Admin</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<AdminLayout>
				<Box className={classes.container}>
					<Typography component="h3" className={classes.heading}>
						{location.state ? 'Update' : 'New'} product
					</Typography>
					<Box className={classes.content}>
						<form
							className={classes.form}
							onSubmit={handleSubmit(
								location.state ? handleEditProduct : handleAddProduct
							)}
						>
							<Box className={classes.uploadContainer}>
								<input
									accept="image/*"
									className={classes.input}
									style={{ display: 'none' }}
									id="raised-button-file"
									multiple
									type="file"
									onChange={handleOnChangePictures}
								/>
								<label htmlFor="raised-button-file">
									Images
									<Button
										variant="raised"
										component="span"
										className={classes.uploadBtn}
									>
										Upload
									</Button>
								</label>
							</Box>
							<TextField
								label="Name"
								variant="outlined"
								className={classes.inputGroup}
								{...register('name')}
								required
							/>
							<TextField
								label="Desc"
								variant="outlined"
								className={classes.inputGroup}
								{...register('desc')}
								required
							/>
							<TextField
								label="Price"
								type="number"
								variant="outlined"
								className={classes.inputGroup}
								{...register('price')}
								required
							/>
							<FormControl component="fieldset" className={classes.inStock}>
								<Typography variant="body1" style={{ marginRight: 20 }}>
									In stock:
								</Typography>
								<Controller
									rules={{ required: true }}
									control={control}
									defaultValue={location?.state?.inStock.toString() || 'true'}
									{...register('inStock')}
									required
									render={({ field }) => {
										const { onBlur, onChange, value } = field
										return (
											<RadioGroup style={{ flexDirection: 'row' }} {...field}>
												<FormControlLabel
													value="true"
													control={
														<Radio
															style={{
																color: '#1a202c',
																'&$checked': {
																	color: '#1a202c',
																},
															}}
														/>
													}
													label="True"
												/>
												<FormControlLabel
													value="false"
													control={
														<Radio
															style={{
																color: '#1a202c',
																'&$checked': {
																	color: '#1a202c',
																},
															}}
														/>
													}
													label="false"
												/>
											</RadioGroup>
										)
									}}
								/>
							</FormControl>
							<TextField
								className={classes.inputGroup}
								id="select"
								label="Category"
								select
								variant="outlined"
								{...register('category')}
								defaultValue={location?.state?.category._id}
								required
							>
								{categories?.map((category) => {
									return (
										<MenuItem value={category._id} key={category._id}>
											{category.name}
										</MenuItem>
									)
								})}
							</TextField>

							<Autocomplete
								className={classes.inputGroup}
								id="combo-box-demo"
								multiple
								disableCloseOnSelect
								value={value}
								options={sizes}
								getOptionLabel={(option) => option.name}
								getOptionSelected={(option, value) => value._id === option._id}
								renderInput={(params) => (
									<TextField
										{...params}
										label="Size"
										variant="outlined"
										fullWidth
									/>
								)}
								renderOption={(option, { selected }) => (
									<>
										<Checkbox
											icon={icon}
											checkedIcon={checkedIcon}
											style={{ marginRight: 8 }}
											checked={selected}
										/>
										{option.name}
									</>
								)}
								onChange={(_, selectedOptions) => setValue(selectedOptions)}
							/>
							{error !== '' && (
								<Typography component="p" className={classes.error}>
									{error}
								</Typography>
							)}
							<Button type="submit" className={classes.saveBtn}>
								Save
							</Button>
						</form>
						<Carousel
							showIndicators={false}
							showArrows={false}
							showStatus={false}
							className={classes.carousel}
						>
							{imagesDisplay?.length > 0 &&
								imagesDisplay.map((image) => {
									return (
										<div>
											<img src={image.preview} alt="imageproduct" />
										</div>
									)
								})}
						</Carousel>
					</Box>
				</Box>
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

export default AddEditProduct
