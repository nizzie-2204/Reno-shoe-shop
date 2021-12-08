import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import CustomerLayout from '../../component/customer/CustomerLayout/CustomerLayout'
import ForgotPasswordForm from '../../component/customer/ForgotPasswordForm/ForgotPasswordForm'

const ForgotPassword = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>Reno - Forgot Password</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<ForgotPasswordForm />
			</CustomerLayout>
		</>
	)
}

export default ForgotPassword
