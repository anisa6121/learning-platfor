import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailCourse = () => {
    const Coursedetails = useLoaderData();
    console.log(Coursedetails)
    
    return (
		<div className="m-auto mt-3 max-w-lg p-4 shadow-md bg-white-900 text-black-300">
			<div className="flex justify-between pb-4 border-bottom">
				<div className="flex items-center">
					<p>Photography</p>
				</div>
				<p>See All</p>
			</div>
			<div className="space-y-4">
				<div className="space-y-2">
					<img
						src="https://source.unsplash.com/random/480x360/?4"
						alt=""
						className="block object-cover object-center w-full rounded-md h-72    bg-gray-500"
					/>
				</div>

				<div className="flex flex-col">
                    <p>6 min ago</p>
                    <p>we</p>
				</div>
				<div className="space-y-2">
					<p className="leading-snug text-black-400">
						Lorem ipsum dolor sit amet
						consectetur, adipisicing elit.
						Repellat, excepturi. Lorem ipsum dolor
						sit amet consectetur, adipisicing
						elit. Repellat, excepturi.
					</p>
				</div>
			</div>
		</div>
    );
};

export default DetailCourse;