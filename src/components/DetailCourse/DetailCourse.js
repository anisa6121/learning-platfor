import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineDownload } from "react-icons/ai";
const DetailCourse = () => {
    const Coursedetails = useLoaderData();
    console.log(Coursedetails)
      const { _id, description, image, title, price, Lesson } = Coursedetails; ;
    return (
		<div className="m-auto mt-3 max-w-lg p-4 shadow-md bg-white-900 text-black-300">
			<div className="flex justify-between pb-4 border-bottom">
				<div className="flex items-center">
					<p className="text-2xl">{title}</p>
				</div>
			
				<p className='text-3xl'>
				
					<AiOutlineDownload></AiOutlineDownload>
				</p>
			</div>
			<div className="space-y-4">
				<div className="space-y-2">
					<img
						src={image}
						alt=""
						className="block object-cover object-center w-full rounded-md h-72    bg-gray-500"
					/>
				</div>

				<div className="flex flex-col">
					<p className="text-2xl">
						Course Price: {price}
					</p>
					<p> Lesson: {Lesson}</p>
				</div>
				<div className="space-y-2">
					<p className="leading-snug text-black-400 font-bold">
						{description}
					</p>
				</div>

				<Link to={`/checkout/${_id}`}>
					<button
						type="button"
						className="flex items-center justify-center w-62 p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
					>
						Get premium access
					</button>
				</Link>
			</div>
		</div>
    );
};

export default DetailCourse;