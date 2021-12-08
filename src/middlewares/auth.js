const jwt = require('jsonwebtoken')

exports.verifyToken = async (req, res, next) => {
	const token = req?.headers?.authorization?.split(' ')[1]
	if (!token) {
		const error = new Error('You are not authenticated')
		error.statusCode = 401
		return next(error)
	} else {
		const user = await jwt.verify(token, process.env.JWT_SECRET)
		req.user = user
		next()
	}
}

exports.verifyTokenAdmin = async (req, res, next) => {
	if (req.user.isAdmin) {
		next()
	} else {
		const error = new Error('You are not allowed to do that')
		error.statusCode = 401
		return next(error)
	}
}
