import React from 'react';
import { Link } from 'react-router-dom';

const Allcourses = ({ Course }) => {
console.log(Course)
    const { _id, description, image, title } = Course;
	return (
		<div className="max-w-xs p-6 rounded-md shadow-md bg-white-900 text-gray-50 ">
			<div className="pb-4  text-black">
				<p className="text-2xl text-green-600"> {title}</p>
			</div>

			<img
				src={image}
				alt=""
				className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
			/>

			<p className="text-gray-900  font-semibold mt-2">
				{description.length > 150 ? 
					<>
						{description.slice(0, 150) + "..."}
						<Link className='text-red-400' to={`/course/${_id}`}>
							Read More
						</Link>
					</>
				 : 
					
					<>{description}</>
				}
			</p>
		</div>
	);
};

export default Allcourses;