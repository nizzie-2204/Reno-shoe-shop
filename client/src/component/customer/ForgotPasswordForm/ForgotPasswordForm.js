import {
	Box,
	Button,
	Hidden,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import bgForgotPasword from '../../../assets/images/forgot-password.png'
import bgWave from '../../../assets/images/login-2.png'
import { useStyles } from './styles'

const ForgotPasswordForm = () => {
	const classes = useStyles()
	return (
		<Box className={classes.login}>
			<Hidden mdDown implementation="js">
				<img src={bgWave} alt="login" className={classes.img1} />
			</Hidden>
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
						Forgot password?
					</Typography>
					<Typography component="h2" className={classes.subHeading}>
						Enter the email address associated with your account
					</Typography>
					<TextField
						className={classes.input}
						placeholder="Email"
						type="email"
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

					<Button className={classes.action}>Submit</Button>
					<Link to="/login" className={classes.redirect}>
						Back to login
					</Link>
				</form>
			</Box>
		</Box>
	)
}

export default ForgotPasswordForm
