const express = require('express')
const router = express.Router()
const {
	getAllCategory,
	getCategory,
	addCategory,
	deleteCategory,
	updateCategory,
} = require('../../controllers/category.controller')

const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')

router
	.route('/categories')
	.post(verifyToken, verifyTokenAdmin, addCategory)
	.get(getAllCategory)

router
	.route('/categories/:id')
	.put(verifyToken, verifyTokenAdmin, updateCategory)
	.get(getCategory)
	.delete(verifyToken, verifyTokenAdmin, deleteCategory)

module.exports = router
