import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Login from './Views/Login'
import Layout from './Components/Layout'
import Dashboard from './Views/Dashboard'

export default function Routes() {
	return useRoutes([
		{ path: '/', element: <Login/> },
		{ path: '/',
			element: <Layout/>,
			children: [
				{ path: 'dashboard', element: <Dashboard/> }
			]
		},
		{ path: '*', element:<Navigate to='404' replace/> }
	])
}
