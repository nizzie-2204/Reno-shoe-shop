import axiosClient from './axiosClient'

const userAPI = {
	getAllUser: async (params) => {
		const url = '/users'
		return await axiosClient.get(url, { params })
	},

	addUser: async (data) => {
		const url = '/users'
		return await axiosClient.post(url, data)
	},

	updateUser: async (data) => {
		const url = `/users/${data._id}`
		return await axiosClient.put(url, data)
	},

	getUser: async (id) => {
		const url = `/users/${id}`
		return await axiosClient.get(url)
	},

	deleteUser: async (id) => {
		const url = `/users/${id}`
		return await axiosClient.delete(url)
	},

	// forgotPassword: async (email) => {
	// 	const url = '/users/forgot-password'
	// 	return await axiosClient.post(url, { email })
	// },

	// resetPassword: async (id, token) => {
	// 	const url = `/users/password-reset/:${id}/:${token}`
	// 	return await axiosClient.post(url)
	// },
}

export default userAPI
