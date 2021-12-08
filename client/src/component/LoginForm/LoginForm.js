import {
	Box,
	Button,
	Hidden,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useStyles } from './styles'
import bgLogin from '../../assets/images/login1.png'
import bgLogin2 from '../../assets/images/login-2.png'
import { BiMailSend, BiLockAlt, BiRightArrowAlt } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { login } from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

const schema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required(),
})

const LoginForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	})
	const [error, setError] = useState('')

	const handleLogin = (data) => {
		const action = login(data)
		dispatch(action)
			.then(unwrapResult)
			.then((res) => {
				localStorage.setItem('token', res.token)
				if (res.user.isAdmin) history.push('/admin/home')
				else history.push('/')
			})
			.catch((error) => {
				if (error.status === 400) setError(error.data.message)
			})
	}

	return (
		<Box className={classes.login}>
			<Hidden mdDown implementation="js">
				<img src={bgLogin2} alt="login" className={classes.img1} />
			</Hidden>
			<Box className={classes.container}>
				<Hidden mdDown implementation="js">
					<Box className={classes.img2Container}>
						<img src={bgLogin} alt="login1" className={classes.img2} />
					</Box>
				</Hidden>
				<form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
					<Typography component="h2" className={classes.heading}>
						Member login
					</Typography>
					{error !== '' && (
						<Typography component="p" className={classes.error}>
							{error}
						</Typography>
					)}
					<TextField
						className={classes.input}
						placeholder="Email"
						type="email"
						{...register('email')}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<BiMailSend className={classes.inputIcon} />
								</InputAdornment>
							),
							classes: {
								input: classes.input,
							},
						}}
					/>
					<TextField
						className={classes.input}
						placeholder="Password"
						type="password"
						{...register('password')}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<BiLockAlt className={classes.inputIcon} />
								</InputAdornment>
							),
							classes: {
								input: classes.input,
							},
						}}
					/>
					<Button className={classes.action} type="submit">
						Login
					</Button>
					<Link to="/forgot-password" className={classes.redirect}>
						Forgot Password?
					</Link>
					<Link to="/register" className={classes.redirect}>
						Create your Account
						<BiRightArrowAlt className={classes.redirectIcon} />
					</Link>
				</form>
			</Box>
		</Box>
	)
}

export default LoginForm
