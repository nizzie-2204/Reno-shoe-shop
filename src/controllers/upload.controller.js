const cloudinary = require('cloudinary')
const fs = require('fs')
require('dotenv').config()

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
})

exports.upload = async (req, res, next) => {
	try {
		if (!req.files || Object.keys(req.files).length === 0) {
			return res.status(400).json({ msg: 'No files were uploaded.' })
		}
		const file = req.files.files

		if (file.length > 1) {
			let resultRes = []
			for (const fi in file) {
				await cloudinary.v2.uploader.upload(
					file[fi].tempFilePath,
					{ folder: 'MERN-Ecommerce' },
					async (err, result) => {
						if (err) throw err
						resultRes.push({
							public_id: result.public_id,
							preview: result.secure_url,
						})
						removeTmp(file[fi].tempFilePath)
					}
				)
			}
			res.status(200).json(resultRes)
		} else {
			cloudinary.v2.uploader.upload(
				file.tempFilePath,
				{ folder: 'MERN-Ecommerce' },
				async (err, result) => {
					if (err) throw err

					removeTmp(file.tempFilePath)

					res.json({ public_id: result.public_id, preview: result.secure_url })
				}
			)
		}
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}

exports.destroy = async (req, res) => {
	try {
		const img = req.body

		if (img.length > 1) {
			for (const id in img) {
				await cloudinary.v2.uploader.destroy(
					img[id].public_id,
					async (err, result) => {
						if (err) throw err
					}
				)
			}
			res.json({ msg: 'Deleted Image' })
		} else {
			const { public_id } = req.body
			cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
				if (err) throw err

				res.json({ msg: 'Deleted Image' })
			})
		}
	} catch (err) {
		res.status(500).json({ msg: err.message })
	}
}

const removeTmp = (path) => {
	fs.unlink(path, (err) => {
		if (err) throw err
	})
}
