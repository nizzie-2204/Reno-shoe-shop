const express = require('express')
const router = express.Router()
const {
	addSize,
	updateSize,
	deleteSize,
	getAllSize,
	getSize,
} = require('../../controllers/size.controller')

const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')

router
	.route('/sizes')
	.post(verifyToken, verifyTokenAdmin, addSize)
	.get(verifyToken, getAllSize)

router
	.route('/sizes/:id')
	.put(verifyToken, verifyTokenAdmin, updateSize)
	.get(verifyToken, getSize)
	.delete(verifyToken, verifyTokenAdmin, deleteSize)

module.exports = router
