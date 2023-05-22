import React from "react"

import {Navigate, Outlet} from "react-router-dom"

const useAuth = () => {
	//get item from localstorage

	let user

	const _user = localStorage.getItem("user")

	if (_user) {
		user = JSON.parse(_user)
		console.log("user", user)
	}
	if (user) {
		return {
			auth: true,
			role: user.role,
		}
	} else {
		return {
			auth: false,
			role: null,
		}
	}
}



const ProtectedRoutes = () => {
	const {auth, role} = useAuth()
    const ProtectedRouteType = {
        roleRequired?: "ADMIN" | "STAFF"
    }

	//if the role required is there or not
	if (ProtectedRouteType) {
		return auth ? (
			ProtectedRouteType === role ? (
				<Outlet />
			) : (
				<Navigate to="/denied" />
			)
		) : (
			<Navigate to="/login" />
		)
	} else {
		return auth ? <Outlet /> : <Navigate to="/login" />
	}
}

export default ProtectedRoutes
