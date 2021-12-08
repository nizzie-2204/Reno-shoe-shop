const express = require('express')
const morgan = require('morgan')
const path = require('path')
const helmet = require('helmet')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const { errorHandler } = require('./src/middlewares/errorHandler')
const { connectDB } = require('./src/configs/mongodb')
const authRouter = require('./src/routes/v1/auth.route')
const userRouter = require('./src/routes/v1/user.route')
const categoryRouter = require('./src/routes/v1/category.route')
const sizeRouter = require('./src/routes/v1/size.route')
const productRouter = require('./src/routes/v1/product.route')
const orderRouter = require('./src/routes/v1/order.route')
const paymentRouter = require('./src/routes/v1/payment.route')
const uploadRouter = require('./src/routes/v1/upload.route')

const app = express()
connectDB()

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'))
}
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(
	fileUpload({
		useTempFiles: true,
	})
)

// Routes
app.use(
	'/api/v1',
	authRouter,
	userRouter,
	categoryRouter,
	sizeRouter,
	productRouter,
	orderRouter,
	paymentRouter,
	uploadRouter
)

// Unhandled route
app.all('*', (req, res, next) => {
	const err = new Error('The route can not be found')
	err.statusCode = 404
	next(err)
})

// Error handle
app.use(errorHandler)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))

	app.get('*', function (_, res) {
		res.sendFile(path.join(__dirname, 'index.html'), function (err) {
			if (err) {
				res.status(500).send(err)
			}
		})
	})
}

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening: http://localhost:${port}`)
})
