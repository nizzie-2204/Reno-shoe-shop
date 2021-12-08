const User = require('../models/user.model')
const AES = require('crypto-js/aes')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

const createToken = ({ id, isAdmin }) => {
	return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET)
}

const checkPassword = (dbPassword, password) => {
	const decodedPassword = AES.decrypt(dbPassword, process.env.PASSWORD_SECRET)
	const originalPassword = decodedPassword.toString(CryptoJS.enc.Utf8)

	if (password === originalPassword) return true
	else return false
}

exports.register = async (req, res, next) => {
	try {
		const hashedPassword = AES.encrypt(
			req.body.password,
			process.env.PASSWORD_SECRET
		).toString()

		const user = { ...req.body, password: hashedPassword }

		await User.create(user)

		res.json({ message: 'Register successfully' })
	} catch (error) {
		next(error)
	}
}

exports.login = async (req, res, next) => {
	try {
		if (!req.body.email || !req.body.password) {
			const error = new Error('Please provide email or password')
			error.statusCode = 400
			return next(error)
		}

		const user = await User.findOne({ email: req.body.email })

		if (!user) {
			const error = new Error('Email is not correct')
			error.statusCode = 400
			return next(error)
		}

		const { password, ...info } = user._doc

		if (checkPassword(password, req.body.password)) {
			const token = createToken({ id: user._id, isAdmin: user.isAdmin })
			res.status(200).json({ token, user: info })
		} else {
			const error = new Error('Password is not correct')
			error.statusCode = 400
			return next(error)
		}
	} catch (error) {
		next(error)
	}
}
