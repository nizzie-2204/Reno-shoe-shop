import {
	Box,
	Button,
	Hidden,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { BiLockAlt } from 'react-icons/bi'
import bgForgotPasword from '../../../assets/images/forgot-password.png'
import { useStyles } from './styles'

const ResetPasswordForm = () => {
	const classes = useStyles()
	return (
		<Box className={classes.login}>
			<Box className={classes.container}>
				<Hidden mdDown implementation="js">
					<Box className={classes.imgContainer}>
						<img
							src={bgForgotPasword}
							alt="not-found"
							className={classes.img}
						/>
					</Box>
				</Hidden>
				<form className={classes.form}>
					<Typography component="h2" className={classes.heading}>
						Create new password
					</Typography>

					<TextField
						className={classes.input}
						placeholder="Password"
						type="password"
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
					<Button className={classes.action}>Reset password</Button>
				</form>
			</Box>
		</Box>
	)
}

export default ResetPasswordForm
