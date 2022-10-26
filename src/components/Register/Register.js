import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Register = () => {

	const { createUser } = useContext(AuthContext);
	const handleSubmit = event => {
	  event.preventDefault()

		const name = event.target.name.value;
		const photoURL = event.target.photoURL.value;
		const email = event.target.email.value;
		const password = event.target.password.value;

		console.log(name, photoURL, email, password)
		createUser(email, password)
		
			.then(result => {
				const user = result.user 
				console.log(user)
			})
		
			.catch(error => {
			console.log(error)
		})
 }
   

    return (
		<div className="mx-auto mt-3 mb-3 flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
			<div className="mb-8 text-center">
				<h1 className="my-3 text-4xl font-bold">
					Register
				</h1>
			</div>

			<form
				onSubmit={handleSubmit}
				noValidate=""
				action=""
				className="space-y-12 ng-untouched ng-pristine ng-valid"
			>
				<div className="space-y-4">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm"
						>
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter Your Name Here"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
							data-temp-mail-org="0"
						/>
					</div>

					<div>
						<label
							htmlFor="photoURL"
							className="block mb-2 text-sm"
						>
							Photo 
						</label>
						<input
							type="text"
							name="photoURL"
							id="photoURL"
							placeholder="Enter Your Photo"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
							data-temp-mail-org="0"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm"
						>
							Email address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your Email Here"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
							data-temp-mail-org="0"
						/>
					</div>
					<div>
						<div className="flex justify-between mb-2">
							<label
								htmlFor="password"
								className="text-sm"
							>
								Password
							</label>
						</div>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
						/>
					</div>
				</div>
				<div className="space-y-2">
					<div>
						<button
							type="submit"
							className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
						>
							Sign Up
						</button>
					</div>
				</div>

				<div className="flex justify-between">
					<p className="text-sm">
						Already have an account
					</p>

					<Link
						className="text-xs hover:underline"
						to="/login"
					>
						Login
					</Link>
				</div>
			</form>
		</div>
    );
};

export default Register;