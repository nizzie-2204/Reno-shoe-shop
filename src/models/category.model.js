const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = Schema(
	{
		name: { type: String, required: true, trim: true, unique: true },
	},
	{ timestamps: true }
)

const Category = mongoose.model('Category', categorySchema)
module.exports = Category
