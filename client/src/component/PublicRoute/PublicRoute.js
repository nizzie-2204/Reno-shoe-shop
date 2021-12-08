import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
	const user = useSelector((state) => state.auth.user)
	const isAuthenticated = Object.keys(user).length > 0

	return (
		<Route
			{...rest}
			render={(props) => {
				return isAuthenticated && restricted ? (
					[user.isAdmin ? <Redirect to="/admin/home" /> : <Redirect to="/" />]
				) : (
					<Component {...props} />
				)
			}}
		/>
	)
}

export default PublicRoute
