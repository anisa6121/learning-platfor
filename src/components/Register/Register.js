import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
		<div className="mx-auto mt-3 mb-3 flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
			<div className="mb-8 text-center">
				<h1 className="my-3 text-4xl font-bold">
					Register
				</h1>
			</div>

			<form
				novalidate=""
				action=""
				className="space-y-8 ng-untouched ng-pristine ng-valid"
			>
				<div className="space-y-2">
					<label  className="block text-sm">
						Name
					</label>
					<input
						type="text"
						name="name"
						placeholder="Enter Your Name"
						className="w-full px-3 py-2 border rounded-md focus:dark:border-violet-400"
					/>
                </div>
                

				<div className="space-y-2">
					<label for="Photo URL" className="block text-sm">
				Photo URL
					</label>
					<input
						type="email"
						name="photoURL"
						
						placeholder="Photo URL"
						className="w-full px-3 py-2 border rounded-md focus:dark:border-violet-400"
					/>
				</div>

				<div className="space-y-4">
					<div className="space-y-2">
						<label
							for="email"
							className="block text-sm"
						>
							Email address
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your Email"
							className="w-full px-3 py-2 border rounded-md focus:dark:border-violet-400"
						/>
					</div>

					<div className="space-y-2">
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter Password"
							className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
				</div>
				<button
					type="button"
					className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
				>
					Submit
				</button>

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