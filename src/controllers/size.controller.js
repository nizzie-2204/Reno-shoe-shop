const Size = require('../models/size.model')

exports.getAllSize = async (req, res, next) => {
	try {
		const sizes = await Size.find()

		res.status(200).json({ sizes })
	} catch (error) {
		next(error)
	}
}

exports.getSize = async (req, res, next) => {
	try {
		const size = await Size.findById(req.params.id)

		res.status(200).json({ size })
	} catch (error) {
		next(error)
	}
}

exports.addSize = async (req, res, next) => {
	try {
		const size = await Size.create(req.body)

		res.status(200).json({ size })
	} catch (error) {
		next(error)
	}
}

exports.updateSize = async (req, res, next) => {
	try {
		const size = await Size.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
				runValidators: true,
			}
		)

		res.status(200).json({ size })
	} catch (error) {
		next(error)
	}
}

exports.deleteSize = async (req, res, next) => {
	try {
		await Size.findByIdAndDelete(req.params.id)
		res.status(200).json('Size has been deleted')
	} catch (error) {
		next(error)
	}
}
