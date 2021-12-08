const router = require('express').Router()
const {
	update,
	detele,
	get,
	getAll,
	forgotPassword,
	resetPassword,
} = require('../../controllers/user.controller')
const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')

router
	.route('/users/:id')
	.get(verifyToken, get)
	.put(verifyToken, update)
	.delete(verifyToken, verifyTokenAdmin, detele)

router.route('/users').get(verifyToken, verifyTokenAdmin, getAll)
router.route('/users/forgot-password').post(forgotPassword)
router.route('/users/password-reset/:id/:token').post(resetPassword)

module.exports = router
