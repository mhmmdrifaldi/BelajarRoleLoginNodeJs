import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Login from './Views/Login'

export default function Routes() {
	return useRoutes([
		{ path: '/', element: <Login/> },
		{ path: '*', element:<Navigate to='404' replace/> }
	])
}
