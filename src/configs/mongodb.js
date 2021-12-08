const mongoose = require('mongoose')

const connectDB = async (req, res) => {
	try {
		const conn = mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		console.log('Connected to MongoDB')
	} catch (error) {
		console.log('Error: ', error)
	}
}

module.exports = { connectDB }
