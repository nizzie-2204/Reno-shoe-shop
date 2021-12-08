const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.payment = async (req, res, next) => {
	try {
		stripe.charges.create(
			{
				source: req.body.data.tokenId,
				amount: req.body.data.amount,
				currency: 'usd',
			},
			(error, stripe) => {
				if (error) {
					const err = new Error(error.error)
					err.statusCode = 500
					return next(err)
				} else {
					res.status(200).json({ stripe })
				}
			}
		)
	} catch (error) {
		next(error)
	}
}
