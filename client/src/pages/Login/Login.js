import React, { useEffect } from 'react'
import CustomerLayout from '../../component/customer/CustomerLayout/CustomerLayout'
import LoginForm from '../../component/LoginForm/LoginForm'
import { Helmet } from 'react-helmet-async'

const Login = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Helmet>
				<title>Reno - Login</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<CustomerLayout>
				<LoginForm />
			</CustomerLayout>
		</>
	)
}

export default Login
