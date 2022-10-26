import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	let navigate = useNavigate()
	const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},

		onSubmit: async (values) => {
			const payload = {
				email: values.email,
				password: values.password
			}
			navigate('/dashboard')
		}
	})

	return (
		<div className='bg-yellow-300 h-screen pt-28'>
			<div className='flex justify-center items-center'>
				<div className='w-2/3 lg:w-2/5 h-auto pt-5 pb-10 px-10 bg-white rounded-md shadow-md'>
					<form>
						<div className='flex justify-center'>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="bg-white text-green-600 -mt-12 w-20 h-20 rounded-full">
								<path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
							</svg>
						</div>
						<h1 className='font-semibold text-2xl border-b-2 text-center mb-5 mt-2'>Login</h1>
						<input
							className='w-full mb-3 border-slate-400 bg-slate-100 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500'
							placeholder='Email'
							type="email"
							name="email"
							id="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							autoComplete="email"
						/>
						<input
							className='w-full mb-5 border-slate-400 bg-slate-100 rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500'
							placeholder='Password'
							type="password"
							name="password"
							id="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							autoComplete="password"
						/>
						<button
							type='submit'
							className='w-full bg-green-600 text-center text-white rounded-md px-3 py-2'
							onSubmit={formik.handleSubmit}
						>
							LOGIN
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
