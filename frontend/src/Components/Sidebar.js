import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
	return (
		<div className='h-screen shadow-lg'>
			<div className='pl-5'>
				<p className='mb-3 uppercase text-sm'>General</p>
				<ul className='mb-3 pl-5'>
					<li className='flex items-center py-2'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
						<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
						<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
					</svg>
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
					<li className='flex items-center py-2'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
						<path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd" />
					</svg>
						<NavLink to="/products">Products</NavLink>
					</li>
				</ul>
				<p className='mb-3 uppercase text-sm'>Admin</p>
				<ul className='pl-5'>
					<li className='flex items-center py-2'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
						<path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
					</svg>	
						<NavLink to="/users">Users</NavLink>
					</li>
				</ul>
			</div>
			<div className='flex justify-center mt-16'>
				<button
					className='px-4 py-1 border-2 border-red-600 bg-red-500 hover:bg-red-600 rounded-lg text-white font-medium hover:font-semibold'
				>
					Logout
				</button>
			</div>
		</div>
	)
}
