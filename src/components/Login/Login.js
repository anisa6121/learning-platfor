import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {

	const [userEmail, setUserEmail] = useState("");
	
const { signIn, resetPassword, providerLogin, signInWithGit, setLoading } =
		useContext(AuthContext);
	
	const [error, setError] = useState("");
	const navigate = useNavigate()

const location = useLocation()

const from = location.state?.from?.pathname || "/";
	
const handleSubmit = (event) => {
event.preventDefault();
const form = event.target
const email = form.email.value;
const password = form.password.value;

	console.log(email, password);
			
signIn(email, password)
.then((result) => {
const user = result.user;
console.log(user);
form.reset()
setError(""); 
navigate(from,{replace:true});
})

.catch((error) => {
console.log(error)
setError(error.message)
})
			
.finally (() => {
	setLoading(false)
})
	
	};
	
// resset password

	  const handleReset = () => {
			resetPassword(userEmail)
				.then(() => {
					toast.success(
						"Reset link has been sent, please check your email"
					);
				})
				.catch((error) => toast.error(error.message));
		};
	
	
  

// Google sign In

    const googleProvider = new GoogleAuthProvider()
    
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            
            .then((result) => { 
                const user = result.user
                console.log(user);
            })

             .catch (e => {
             console.error(e)
             })

	}
	// Github Sign In
	const githubProvider = new GithubAuthProvider()

	 const handleGithubSignIn = () => {
			signInWithGit(githubProvider)
				.then((result) => {
					const user = result.user;
					console.log(user);
				})

				.catch((e) => {
					console.error(e);
				});
		};

    return (
		<div className="mx-auto mt-4 w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-700 text-gray-100 mb-3">
			<h2 className="mb-3 text-3xl font-semibold text-center">
				Login
			</h2>

			<form
				onSubmit={handleSubmit}
				noValidate=""
				action=""
				className="space-y-8 ng-untouched ng-pristine ng-valid"
			>
				<div className="space-y-4">
					<div className="space-y-2">
						<label
							for="email"
							className="block text-sm"
						>
							Email address
						</label>

						<input
							onBlur={(event) =>
								setUserEmail(
									event.target
										.value
								)
							}
							required
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your Email"
							className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white text-black focus:dark:border-violet-400"
						/>
					</div>

					<div className="space-y-2">
						<label
							for="email"
							className="block text-sm"
						>
							Password
						</label>

						<input
							required
							type="password"
							name="password"
							id="password"
							placeholder="Enter Password"
							className="w-full px-3 py-2 border rounded-md border-gray-700 bg-white  text-black focus:dark:border-violet-400"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="w-full px-8 py-3 font-semibold rounded-md bg-violet-500 text-gray-900"
				>
					Sign in
				</button>

				<div className="flex justify-between">
					<p className="text-sm">Forgot password?</p>

					<button
						onClick={handleReset}
						className="text-xs hover:underline"
					>
						Please reset your password
					</button>
				</div>
			</form>

			<div className="flex items-center w-full my-4">
				<hr className="w-full" />
				<p className="px-3">OR</p>
				<hr className="w-full" />
			</div>

			<div className="my-6 space-y-4">
				<button
					onClick={handleGoogleSignIn}
					aria-label="Login with Google"
					type="button"
					className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 32 32"
						className="w-5 h-5 fill-current"
					>
						<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
					</svg>
					<p>Login with Google</p>
				</button>
				<button
					onClick={handleGithubSignIn}
					aria-label="Login with GitHub"
					// role="button"
					className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 32 32"
						className="w-5 h-5 fill-current"
					>
						<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
					</svg>
					<p>Login with GitHub</p>
				</button>
			</div>
			<div className="flex justify-between">
				<p className="text-sm">New to this Website</p>

				<Link
					to="/register"
					className="text-xs hover:underline mb-3"
				>
					Please Register
				</Link>
			</div>

			<p className="text-lg  text-white-700">{error}</p>
		</div>
    );
}; 

export default Login;