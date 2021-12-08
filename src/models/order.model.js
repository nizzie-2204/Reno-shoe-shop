const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		orderItems: [],
		paymentMethod: {
			type: String,
			required: true,
			enum: ['Payment on delivery', 'Card'],
		},
		totalPrice: { type: Number, required: true },
		status: {
			type: String,
			default: 'Pending',
			enum: ['Pending', 'Delivered', 'Canceled'],
		},
		address: { type: String, required: true },
	},
	{ timestamps: true }
)

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
