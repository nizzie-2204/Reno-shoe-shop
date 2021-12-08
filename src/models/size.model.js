const mongoose = require('mongoose')
const { Schema } = mongoose

const sizeSchema = Schema(
	{
		name: { type: String, required: true, trim: true, unique: true },
	},
	{ timestamps: true }
)

const Size = mongoose.model('Size', sizeSchema)
module.exports = Size
