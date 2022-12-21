import React, { useState } from "react";
import './Header.css'
import { useContext } from "react";
import { NavLink, Link} from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

import { FaUser } from 'react-icons/fa';
import Togglebutton from "../../Others/Togglebutton/Togglebutton";
const Header = () => {

	
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	

	const { user, logOut } = useContext(AuthContext);



	const handleLogOut = () => {
		logOut()
			.then(() => { })
		.catch(error => console.log(error))
	}
	return (
		<div className="bg-slate-300">
			<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div className="relative flex items-center justify-between">
					<Link
						to="/"
						aria-label="education"
						title="education"
						className="inline-flex items-center"
					>
						<svg
							id="logo-39"
							width="50"
							height="40"
							viewBox="0 0 50 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							{" "}
							<path
								d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
								fill="#A5B4FC"
								class="ccompli2"
							></path>{" "}
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
								fill="#4F46E5"
								class="ccustom"
							></path>{" "}
							<path
								d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
								fill="#A5B4FC"
								class="ccompli2"
								fill-opacity="0.3"
							></path>{" "}
						</svg>

						<span className="ml-2 text-xl font-bold tracking-wide text-blue-800">
							Educational
							Platform
						</span>
					</Link>
					<ul className="flex items-center hidden space-x-8 lg:flex">
						<li>
							<NavLink
								to="/home"
								aria-label="Home"
								title="Home"
								className={({
									isActive,
								}) =>
									isActive
										? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
										: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
								}
							>
								Home
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/courses"
								aria-label="Courses"
								title="Courses"
								className={({
									isActive,
								}) =>
									isActive
										? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
										: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
								}
							>
								Courses
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/blog"
								aria-label="Blog"
								title="Blog"
								className={({
									isActive,
								}) =>
									isActive
										? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
										: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
								}
							>
								Blog
							</NavLink>
						</li>

						<li>
							{user?.uid ? (
								<>
									<Link
										onClick={
											handleLogOut
										}
										className="px-5 py-2 bg-blue-700 text-white rounded-xl font-semibold"
									>
										Logout
									</Link>
								</>
							) : (
								<div className="flex lg:flex-row">
									<li>
										<NavLink
											to="/login"
											aria-label="login"
											title="login"
											className={({
												isActive,
											}) =>
												isActive
													? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
													: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											}
										>
											Login
										</NavLink>
									</li>
									<li className="ml-5">
										<NavLink
											to="/register"
											aria-label="register"
											title="register"
											className={({
												isActive,
											}) =>
												isActive
													? "  font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
													: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											}
										>
											Register
										</NavLink>
									</li>
								</div>
							)}
						</li>

						<div class="tooltip">
							<Link to="/profile">
								{user?.photoURL ? (
									<img
										className="rounded-full w-10"
										src={
											user?.photoURL
										}
										alt=""
									/>
								) : (
									<FaUser></FaUser>
								)}
							</Link>

							<span className="tooltiptext">
								{user?.displayName}
							</span>
						</div>

						<li>
							<Togglebutton></Togglebutton>
						</li>
					</ul>

					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
							onClick={() =>
								setIsMenuOpen(true)
							}
						>
							<svg
								className="w-5 text-gray-600"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z  						                            "
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>

						{isMenuOpen && (
							<div className="absolute top-0 left-0 w-full">
								<div className="p-5 bg-white border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<Link
												to="/"
												aria-label="proReader"
												title="proReader"
												className="inline-flex items-center"
											>
												<svg
													id="logo-39"
													width="50"
													height="40"
													viewBox="0 0 50 40"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													{" "}
													<path
														d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
														fill="#A5B4FC"
														class="ccompli2"
													></path>{" "}
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
														fill="#4F46E5"
														class="ccustom"
													></path>{" "}
													<path
														d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
														fill="#A5B4FC"
														class="ccompli2"
														fill-opacity="0.3"
													></path>{" "}
												</svg>
												<span className="ml-2 text-xl font-bold tracking-wide text-blue-800 uppercase">
													Education
													Platform
												</span>
											</Link>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition 									duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() =>
													setIsMenuOpen(
														false
													)
												}
											>
												<svg
													className="w-5 text-gray-600"
													viewBox="0 0 24 24"
												>
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className="space-y-1">
											<li>
												<li>
													<NavLink
														to="/home"
														aria-label="Home"
														title="Home"
														className={({
															isActive,
														}) =>
															isActive
																? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
																: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
														}
													>
														Home
													</NavLink>
												</li>

												<NavLink
													to="/courses"
													aria-label="Courses"
													title="Courses"
													className={({
														isActive,
													}) =>
														isActive
															? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
															: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
													}
												>
													Courses
												</NavLink>
											</li>
											<li>
												<NavLink
													to="/blog"
													aria-label="Blog"
													title="Blog"
													className={({
														isActive,
													}) =>
														isActive
															? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
															: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
													}
												>
													Blog
												</NavLink>
											</li>

											<li>
												{user?.uid ? (
													<>
														<Link
															onClick={
																handleLogOut
															}
															className="md:px-5 md:py-2 bg-blue-700 text-white rounded-xl font-semibold"
														>
															Logout
														</Link>
													</>
												) : (
													<div className=" ">
														<li>
															<NavLink
																to="/login"
																aria-label="login"
																title="login"
																className={({
																	isActive,
																}) =>
																	isActive
																		? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
																		: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
																}
															>
																Login
															</NavLink>
														</li>
														<li className="sm:ml-0">
															<NavLink
																to="/register"
																aria-label="register"
																title="register"
																className={({
																	isActive,
																}) =>
																	isActive
																		? "  font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
																		: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
																}
															>
																Register
															</NavLink>
														</li>
													</div>
												)}
											</li>

											<div class="tooltip">
												<Link to="/profile">
													{user?.photoURL ? (
														<img
															className="rounded-full w-10"
															src={
																user?.photoURL
															}
															alt=""
														/>
													) : (
														<FaUser></FaUser>
													)}
												</Link>

												<span className="tooltiptext">
													{
														user?.displayName
													}
												</span>
											</div>

											<li>
												<Togglebutton></Togglebutton>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;