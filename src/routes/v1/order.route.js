const express = require('express')
const router = express.Router()
const {
	getAllOrder,
	getOrder,
	deleteOrder,
	addlOrder,
	updateOrder,
} = require('../../controllers/order.controller')

const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')

router
	.route('/orders')
	.post(verifyToken, addlOrder)
	.get(verifyToken, getAllOrder)

router
	.route('/orders/:id')
	.put(verifyToken, verifyTokenAdmin, updateOrder)
	.get(verifyToken, getOrder)
	.delete(verifyToken, verifyTokenAdmin, deleteOrder)

module.exports = router
