import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
const PrivateRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.auth.user)
	const isAuthenticated = Object.keys(user).length > 0

	return (
		<Route
			{...rest}
			render={(props) => {
				return isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				)
			}}
		/>
	)
}

export default PrivateRoute
