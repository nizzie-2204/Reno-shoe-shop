const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = Schema(
	{
		fullName: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minLength: 8,
		},
		email: { type: String, required: true, unique: true, trim: true },
		isAdmin: { type: Boolean, default: false },
		cart: [],
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User
