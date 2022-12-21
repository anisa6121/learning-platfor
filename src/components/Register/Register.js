import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Register = () => {

	const { createUser, updateUserProfile } = useContext(AuthContext);

	const [error, setError] = useState("");
	const handleSubmit = event => {
	  event.preventDefault()

		
		const form = event.target
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;

		console.log(name, photoURL, email, password)
		createUser(email, password)
		
			.then(result => {
				const user = result.user 
				console.log(user)
			
				
			
				setError("")
				form.reset()
				handleUserProfile(name, photoURL);
			})
		
			.catch(error => {
				console.log(error)
				setError(error.message);
				
		})
	}
	
	const handleUserProfile = (name, photoURL) => {

		const profile = {
			displayName: name,
			photoURL: photoURL,
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch((e) => console.error(e));
	}
   

    return (
		<div className="mx-auto mt-3 mb-3 flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-700 text-gray-100">
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
							required
							type="text"
							name="name"
							id="name"
							placeholder="Enter Your Name Here"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white
							 text-gray-900"
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
							required
							type="text"
							name="photoURL"
							id="photoURL"
							placeholder="Enter Your Photo"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white text-gray-900"
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
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-white text-gray-900"
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
							className="w-full px-3 py-2 border rounded-md border-gray-300 bg-white focus:border-gray-900 text-gray-900"
						/>
					</div>
				</div>
				<div className="space-y-2">
					<div>
						<button
							type="submit"
							className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white"
						>
							Sign Up
						</button>
					</div>
				</div>

				<div className="flex justify-between text-orange-400">
					<p className="text-sm">
						Already have an account
					</p>

					<Link
						className=" hover:underline text-xl"
						to="/login"
					>
						Login
					</Link>
				</div>
			</form>
			<p className="text-lg  text-white-700">{error}</p>
		</div>
    );
};

export default Register;