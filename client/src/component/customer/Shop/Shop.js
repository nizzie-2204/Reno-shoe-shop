import { css } from '@emotion/react'
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	MenuItem,
	TextField,
	Typography,
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import Rating from '@material-ui/lab/Rating'
import { unwrapResult } from '@reduxjs/toolkit'
import queryString from 'query-string'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import RingLoader from 'react-spinners/RingLoader'
import { getAllCategory } from '../../../redux/slices/categorySlice'
import { getAllProduct } from '../../../redux/slices/productSlice'
import CustomerLayout from '../CustomerLayout/CustomerLayout'
import { useStyles } from './styles'

const override = css`
	display: block;
	margin: 0 auto;
`

const Shop = () => {
	const classes = useStyles()
	const history = useHistory()
	const dispatch = useDispatch()
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const products = useSelector((state) => state.product.products)
	const categories = useSelector((state) => state.category.categories)
	const productsLoading = useSelector((state) => state.product.productsLoading)

	useEffect(() => {
		const fetchCategories = () => {
			const action = getAllCategory()
			dispatch(action)
		}
		fetchCategories()
	}, [])

	const handleNavigate = (id) => {
		history.push(`/product/${id}`)
	}

	// Pagination
	const [filter, setFilter] = useState({
		search: searchParams.get('search') || null,
		count: 0,
		order: searchParams.get('order') || null,
		sortBy: searchParams.get('sortBy') || null,
		category: searchParams.get('category') || null,
		page: parseInt(searchParams.get('page')) || 1,
		limit: 12,
	})

	// Change page pagination
	const handleChange = (event, value) => {
		if (value === filter.page) return

		// setPage(value)
		setFilter({
			...filter,
			page: value,
		})
		history.push(`/shop?page=${value}`)
		history.push({
			pathname: '/shop',
			search: `?page=${value}`,
		})
	}

	const categoryRef = useRef('')

	const handleChangeCategory = (e) => {
		categoryRef.current = e.target.value
		setFilter({
			...filter,
			category: e.target.value,
			page: 1,
		})
		history.push({
			pathname: '/shop',
			search: `?${queryString.stringify({
				limit: filter.limit,
				page: filter.page,
				category: e.target.value,
				order: filter.order,
				sortBy: filter.sortBy,
				// ...filter,
				search: searchParams.get('search'),
			})}`,
		})
	}

	const handleChangePrice = (e) => {
		// setOrder(e.target.value)
		// setSortBy('price')
		// setPage(1)
		setFilter({
			...filter,
			order: e.target.value,
			sortBy: 'price',
			page: 1,
		})
		if (filter.category)
			history.push({
				pathname: '/shop',
				search: `?${queryString.stringify({
					limit: filter.limit,
					page: filter.page,
					category: filter.category,
					order: e.target.value,
					search: searchParams.get('search'),
					sortBy: 'price',
				})}`,
			})
		else
			history.push({
				pathname: '/shop',
				search: `?${queryString.stringify({
					limit: filter.limit,
					page: filter.page,
					order: e.target.value,
					search: searchParams.get('search'),
					sortBy: 'price',
				})}`,
			})
	}

	useEffect(() => {
		const fetchProducts = () => {
			const params = queryString.stringify({
				// ...filter,
				limit: filter.limit,
				page: filter.page,
				category: filter.category,
				order: filter.order,
				sortBy: filter.sortBy,
				search: searchParams.get('search') || null,
			})
			const action = getAllProduct(params)
			dispatch(action)
				.then(unwrapResult)
				.then((res) => {
					setFilter({
						...filter,
						count: res.pages,
						page: res.page,
					})
				})
		}

		fetchProducts()
	}, [
		filter.page,
		dispatch,
		filter.limit,
		filter.category,
		filter.order,
		filter.sortBy,
	])

	useEffect(() => {
		if (searchParams.get('search')) {
			if (searchParams.get('search') !== filter.search) {
				setFilter({
					...filter,
					category: null,
					order: null,
					sortBy: null,
					search: searchParams.get('search'),
				})
			}
		}
	}, [searchParams.get('search')])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [filter.page])

	return (
		<>
			<Helmet>
				<title>Reno - Shop</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<Grid
					container
					direction="column"
					alignItems="center"
					className={classes.lastestProducts}
				>
					{products.length > 0 && (
						<Box className={classes.filter}>
							<Typography component="h3" className={classes.heading}>
								All products
							</Typography>
							<Box className={classes.select}>
								<Typography component="p" className={classes.selectHeading}>
									Sort by:
								</Typography>
								<TextField
									id="select"
									select
									variant="outlined"
									className={classes.textField}
									label={filter.order !== null ? '' : 'Price'}
									onChange={handleChangePrice}
									InputLabelProps={{ shrink: false }}
									value={filter.order}
								>
									<MenuItem value="desc">Price: High to Low</MenuItem>
									<MenuItem value="asc">Price: Low to High</MenuItem>
								</TextField>
								<TextField
									id="select2"
									select
									variant="outlined"
									className={classes.textField}
									label={filter.category !== null ? '' : 'Category'}
									InputLabelProps={{ shrink: false }}
									onChange={handleChangeCategory}
									ref={categoryRef}
									value={filter.category}
								>
									{categories?.map((category) => {
										return (
											<MenuItem value={category._id} key={category.name}>
												{category.name}
											</MenuItem>
										)
									})}
								</TextField>
							</Box>
						</Box>
					)}

					{!productsLoading ? (
						<>
							<Grid item container className={classes.list}>
								{products.length > 0 ? (
									products.map((product) => (
										<Grid
											item
											xl={3}
											lg={4}
											md={6}
											sm={12}
											className={classes.gridItem}
										>
											<Card
												className={classes.root}
												onClick={() => {
													handleNavigate(product._id)
												}}
											>
												<CardActionArea
													className={classes.cardArea}
													style={{ position: 'relative' }}
												>
													<>
														<CardMedia
															className={classes.media}
															image={product.images[0].preview}
															title={product.name}
														/>
														{!product.inStock && (
															<Typography
																component="p"
																className={classes.watermark}
															>
																Sold out
															</Typography>
														)}
													</>
													<CardContent className={classes.content}>
														<Box className={classes.topTitle}>
															<Typography
																gutterBottom
																variant="h5"
																component="h2"
																className={classes.name}
															>
																{product.name}
															</Typography>
														</Box>
														<Box className={classes.bottomTitle}>
															<Typography variant="body2" component="p">
																${product.price}
															</Typography>
															<Rating
																readOnly
																size="small"
																name="size-medium"
																defaultValue={2}
															/>
														</Box>
													</CardContent>
												</CardActionArea>
											</Card>
										</Grid>
									))
								) : (
									<Typography component="p" className={classes.empty}>
										No products found
									</Typography>
								)}
							</Grid>
							{filter.count > 1 && (
								<Pagination
									className={classes.pagition}
									count={filter.count}
									page={filter.page}
									onChange={handleChange}
									variant="outlined"
									shape="rounded"
								/>
							)}
						</>
					) : (
						<Box className={classes.loadingContainer}>
							<RingLoader css={override} size={140} />
						</Box>
					)}
				</Grid>
			</CustomerLayout>
		</>
	)
}

export default Shop
