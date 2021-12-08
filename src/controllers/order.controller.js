const Order = require('../models/order.model')

exports.getAllOrder = async (req, res, next) => {
	try {
		if (!req.user.isAdmin) {
			const orders = await Order.find({ userId: req.user.id })
			res.status(200).json({ orders })
		} else {
			const orders = await Order.find()
			res.status(200).json({ orders })
		}
	} catch (error) {
		next(error)
	}
}

exports.getOrder = async (req, res, next) => {
	try {
		const order = await Order.findById(req.params.id)

		// if(!order){
		//     const error = new Error("")
		// }

		res.status(200).json({ order })
	} catch (error) {
		next(error)
	}
}

exports.addlOrder = async (req, res, next) => {
	try {
		console.log(req.body)
		const order = await Order.create(req.body.data)

		res.status(200).json({ order })
	} catch (error) {
		next(error)
	}
}

exports.updateOrder = async (req, res, next) => {
	try {
		console.log(req.body)
		const newOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body.data,
			},
			{
				new: true,
				runValidator: true,
			}
		)

		res.status(200).json({ newOrder })
	} catch (error) {
		next(error)
	}
}

exports.deleteOrder = async (req, res, next) => {
	try {
		await Order.findOneAndDelete(req.params.id)

		res.status(200).json('Order has been deleted')
	} catch (error) {
		next(error)
	}
}
