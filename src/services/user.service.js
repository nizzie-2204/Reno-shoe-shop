const User = require('../models/user.model')

const UserService = {
	register: async (data) => {
		return await User.create(data)
	},
	// find: async (email) => {
	//     const user = await User.find({email})
	// }
}

module.exports = UserService
