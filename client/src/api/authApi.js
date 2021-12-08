import axiosClient from './axiosClient'

const authAPI = {
	register: async (data) => {
		const url = '/register'
		return await axiosClient.post(url, data)
	},

	login: async (data) => {
		const url = '/login'
		return await axiosClient.post(url, data)
	},
}

export default authAPI
