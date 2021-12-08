import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const CustomerLayout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default CustomerLayout
