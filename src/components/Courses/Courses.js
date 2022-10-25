import React from 'react';
import RightsideNav from '../../Others/RightsideNav/RightsideNav';

const Courses = () => {
    return (
		<div className="px-4 py-16 mx-auto sm:max md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="flex flex-col lg:flex-row">
			
				<div className="w-32 mx-auto ">
					
<RightsideNav></RightsideNav>
				
				</div>
				{/* <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"> */}
				<div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-2 ">
					<div className="max-w-xs p-6 rounded-md shadow-md bg-white-900 text-gray-50">
						<div className="flex justify-between pb-4 border-bottom">
							<div className="flex items-center">
								<a
									rel="noopener noreferrer"
									href="#"
									className="mb-0 capitalize text-gray-600"
								>
									Photography
								</a>
							</div>
							<a
								rel="noopener noreferrer"
								href="#"
							>
								See All
							</a>
						</div>

						<img
							src="https://source.unsplash.com/random/300x300/?1"
							alt=""
							className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
						/>
						<div className="mt-6 mb-2">
							<span className="block text-xs font-medium tracking-widest uppercas text-violet-400">
								Quisque
							</span>
							<h2 className="text-xl font-semibold tracking-wide">
								Nam maximus purus
							</h2>
						</div>
						<p className="text-gray-600">
							Mauris et lorem at elit
							tristique dignissim et
							ullamcorper elit. In sed
							feugiat mi. Etiam ut lacinia
							dui.
						</p>

						<button
							type="button"
							className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
						>
							Read more
						</button>
					</div>

					<div className="max-w-xs p-6 rounded-md shadow-md bg-white-300 text-gray-50">
						<div className="flex justify-between pb-4 border-bottom">
							<div className="flex items-center">
								<a
									rel="noopener noreferrer"
									href="#"
									className="mb-0 capitalize text-gray-600"
								>
									Photography
								</a>
							</div>
							<a
								rel="noopener noreferrer"
								href="#"
							>
								See All
							</a>
						</div>

						<img
							src="https://source.unsplash.com/random/300x300/?1"
							alt=""
							className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
						/>
						<div className="mt-6 mb-2">
							<span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
								Quisque
							</span>
							<h2 className="text-xl font-semibold tracking-wide">
								Nam maximus purus
							</h2>
						</div>
						<p className="text-gray-100">
							Mauris et lorem at elit
							tristique dignissim et
							ullamcorper elit. In sed
							feugiat mi. Etiam ut lacinia
							dui.
						</p>

						<button
							type="button"
							className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
						>
							Read more
						</button>
					</div>
				
				</div>
			</div>
		</div>
    );
};

export default Courses;