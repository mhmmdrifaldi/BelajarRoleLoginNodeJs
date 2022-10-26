import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout() {
	return (
		<React.Fragment>
			<Navbar/>
			<div className='grid grid-cols-5 gap-2 mt-1'>
				<div className='col-span-1'><Sidebar/></div>
				<div className='col-span-4 bg-slate-100 w-full'><Outlet/></div>
			</div>
		</React.Fragment>
	)
}
