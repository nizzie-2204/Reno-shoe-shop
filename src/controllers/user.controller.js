const User = require('../models/user.model')
const AES = require('crypto-js/aes')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')

const createResetPasswordToken = ({ id }) => {
	return jwt.sign({ id }, process.env.JWT_RESET_PASSWORD_TOKEN, {
		expiresIn: '5m',
	})
}

const sendMail = async (user, subject, text) => {
	try {
		const transpoter = nodemailer.createTransport({
			host: process.env.HOST,
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		})

		await transpoter.sendMail({
			from: process.env.USER,
			to: user.email,
			subject: subject,
			text: text,
		})
	} catch (error) {
		console.log('Email not sent: ', error)
	}
}

exports.update = async (req, res, next) => {
	try {
		if (req.body.password) {
			req.body.password = AES.encrypt(
				req.body.password,
				process.env.PASS_SEC
			).toString()
		}

		const newUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
				runValidators: true,
			}
		).select('-password')

		res.status(200).json({ user: newUser })
	} catch (error) {
		next(error)
	}
}

exports.detele = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id)

		res.status(200).json('User has been deleted')
	} catch (error) {
		next(error)
	}
}

exports.getAll = async (req, res, next) => {
	try {
		const users = await User.find()

		res.status(200).json({ users })
	} catch (error) {
		next(error)
	}
}

exports.get = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id).select('-password')

		res.status(200).json({ user })
	} catch (error) {
		next(error)
	}
}

exports.forgotPassword = async (req, res, next) => {
	try {
		if (!req.body.email) {
			const error = new Error('Please provide email')
			error.statusCode = 400
			return next(error)
		}

		const user = await User.findOne({ email: req.body.email })
		if (!user) {
			const error = new Error('Email is not correct')
			error.statusCode = 400
			return next(error)
		}

		const resetPasswordToken = createResetPasswordToken({
			email: req.body.email,
			id: user._id,
		})

		const link = `${process.env.BASE_URL}/users/password-reset/${user._id}/${resetPasswordToken}`

		await sendMail(user, 'Password reset', link)

		res
			.status(200)
			.json({ message: 'Password reset link sent to your email account' })
	} catch (error) {
		next(error)
	}
}

exports.resetPassword = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id)

		if (!user) {
			const error = new Error('Invalid link or expired')
			error.statusCode = 400
			return next(error)
		}

		const token = req.params.token
		if (!token) {
			const error = new Error('Invalid link or expired')
			error.statusCode = 400
			return next(error)
		}

		const isVerified = jwt.verify(token, process.env.JWT_RESET_PASSWORD_TOKEN)

		if (isVerified) {
			const hashedPassword = AES.encrypt(
				req.body.password,
				process.env.PASSWORD_SECRET
			).toString()
			const newUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: { password: hashedPassword },
				},
				{
					new: true,
					runValidators: true,
				}
			)
			res.status(200).json({ newUser })
		} else {
			const error = new Error('Invalid link or expired')
			error.statusCode = 400
			return next(error)
		}
	} catch (error) {
		next(error)
	}
}
