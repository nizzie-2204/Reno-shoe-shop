const express = require('express')
const { upload, destroy } = require('../../controllers/upload.controller')
const { verifyToken, verifyTokenAdmin } = require('../../middlewares/auth')
const router = express.Router()

// Allow admin to use these routes
router.route('/upload').post(verifyToken, verifyTokenAdmin, upload)

router.route('/destroy').post(verifyToken, verifyTokenAdmin, destroy)

module.exports = router
