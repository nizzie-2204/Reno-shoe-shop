const Category = require('../models/category.model')

exports.getAllCategory = async (req, res, next) => {
	try {
		const categories = await Category.find()

		res.status(200).json({ categories })
	} catch (error) {
		next(error)
	}
}

exports.getCategory = async (req, res, next) => {
	try {
		const category = await Category.findById(req.params.id)

		res.status(200).json({ category })
	} catch (error) {
		next(error)
	}
}

exports.updateCategory = async (req, res, next) => {
	try {
		const category = await Category.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
				runValidators: true,
			}
		)

		res.status(200).json({ category })
	} catch (error) {
		next(error)
	}
}

exports.deleteCategory = async (req, res, next) => {
	try {
		await Category.findByIdAndDelete(req.params.id)

		res.status(200).json('Category has been deleted')
	} catch (error) {
		next(error)
	}
}

exports.addCategory = async (req, res, next) => {
	try {
		const category = await Category.create(req.body)

		res.status(200).json({ category })
	} catch (error) {
		next(error)
	}
}
