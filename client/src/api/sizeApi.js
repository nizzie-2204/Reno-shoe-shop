import axiosClient from './axiosClient'

const sizeAPI = {
	getAllSize: async (params) => {
		const url = '/sizes'
		return await axiosClient.get(url, { params })
	},

	addSize: async (data) => {
		const url = '/sizes'
		return await axiosClient.post(url, data)
	},

	updateSize: async (data) => {
		const url = `/sizes/${data._id}`
		return await axiosClient.put(url, data)
	},

	getSize: async (id) => {
		const url = `/sizes/${id}`
		return await axiosClient.get(url)
	},

	deleteSize: async (id) => {
		const url = `/sizes/${id}`
		return await axiosClient.delete(url)
	},
}

export default sizeAPI
