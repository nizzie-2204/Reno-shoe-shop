import React, { useEffect } from 'react'
import CustomerLayout from '../../component/customer/CustomerLayout/CustomerLayout'
import RegisterForm from '../../component/RegisterForm/RegisterForm'
import { Helmet } from 'react-helmet-async'

const Register = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>Reno - Register</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<RegisterForm />
			</CustomerLayout>
		</>
	)
}

export default Register
