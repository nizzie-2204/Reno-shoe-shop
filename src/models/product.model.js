const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = Schema(
	{
		name: { type: String, required: true, unique: true, trim: true },
		desc: { type: String, required: true, trim: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		size: [{ type: Schema.Types.ObjectId, ref: 'Size' }],
		price: { type: Number, required: true },
		images: { type: Array },
		inStock: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
