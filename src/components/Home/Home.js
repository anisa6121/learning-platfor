import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
		<section className="bg-pink-300 text-gray-100">
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<img
						src="image/image_processing20210530-1268-4xq5ud.png"
						alt=""
						className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
					/>
				</div>
				<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
					<h1 className="text-5xl font-bold leading-none sm:text-6xl">
						Online Education
						<br />
						<span className="text-violet-400 text-3xl">
							Study anytime, wherever you are
						</span>
					</h1>
					<p className="text-black font-semibold mt-6 mb-8 text-2xl sm:mb-12 ">
						You can buy and study any subject of
						your choice. And advance your
						knowledge.
					</p>

					<div className="space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<Link
							rel="noopener noreferrer"
							to="/courses"
							className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-white-900"
						>
							Our Courseses
						</Link>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Home;