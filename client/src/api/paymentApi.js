import axiosClient from './axiosClient'

const paymentAPI = {
	addPayment: async (data) => {
		const url = '/payments'
		return await axiosClient.post(url, { data })
	},
}

export default paymentAPI
