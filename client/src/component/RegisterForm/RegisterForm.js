import React, { useState } from 'react'
import { useStyles } from './styles'
import {
	Box,
	Button,
	Hidden,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core'
import { BiMailSend, BiLockAlt, BiUser } from 'react-icons/bi'
import { Link, useHistory } from 'react-router-dom'

import bgRes2 from '../../assets/images/register-2.png'
import bgRes1 from '../../assets/images/register-1.svg'
import bgRes3 from '../../assets/images/register-3.svg'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { signUp } from '../../redux/slices/authSlice'

const schema = yup.object().shape({
	fullName: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().required().min(8, 'Password is 8 characters long'),
	confirmPassword: yup
		.string()
		.required('Confirm password is a required field')
		.oneOf([yup.ref('password'), null], 'Confirm password is not correct'),
})

const RegisterForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const history = useHistory()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})
	const [error, setError] = useState()

	const handleRegister = (data) => {
		const action = signUp(data)
		dispatch(action)
			.then(unwrapResult)
			.then(() => {
				history.push('/login')
			})
			.catch((error) => {
				if (error.status === 400) setError('Email has already been taken')
			})
	}

	return (
		<Box className={classes.login}>
			<Hidden mdDown implementation="js">
				<img src={bgRes2} alt="login" className={classes.img1} />
			</Hidden>
			<Box className={classes.container}>
				<Hidden mdDown implementation="js">
					<Box className={classes.img2Container}>
						<img src={bgRes1} alt="login1" className={classes.img2} />
					</Box>
				</Hidden>
				<form className={classes.form} onSubmit={handleSubmit(handleRegister)}>
					<img src={bgRes3} alt="avatar" className={classes.avatar} />
					{errors.confirmPassword && (
						<Typography component="p" className={classes.error}>
							{errors.confirmPassword.message}
						</Typography>
					)}
					{errors.password && (
						<Typography component="p" className={classes.error}>
							{errors.password.message}
						</Typography>
					)}
					{error && (
						<Typography component="p" className={classes.error}>
							{error}
						</Typography>
					)}
					<TextField
						className={classes.input}
						placeholder="Enter name"
						{...register('fullName')}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<BiUser className={classes.inputIcon} />
								</InputAdornment>
							),
							classes: {
								input: classes.input,
							},
						}}
					/>
					<TextField
						className={classes.input}
						placeholder="Enter email"
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
						placeholder="Enter password"
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
					<TextField
						className={classes.input}
						placeholder="Confirm password"
						type="password"
						{...register('confirmPassword')}
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
					<Button type="submit" className={classes.action}>
						Sign Up
					</Button>
					<Typography component="body2" className={classes.account}>
						Have an Account?
						<Link to="/login" className={classes.redirect}>
							Login
						</Link>
					</Typography>
				</form>
			</Box>
		</Box>
	)
}

export default RegisterForm
