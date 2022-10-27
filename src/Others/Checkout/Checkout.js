import React from 'react';
import toast from 'react-hot-toast';


import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseData = useLoaderData();
    console.log(courseData);

     const {image, title, price, Lesson } = courseData; 

    const handleCheckout = () => {

     toast.success("Thank you.")
    }
    return (
		<div className="max-w-xs p-6 rounded-md shadow-md bg-white-400 text-black-50 mx-auto mt-6 mb-2">
			<img
				src={image}
				alt=""
				className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
			/>
			<div className="mt-6 mb-2">
				<span className="block text-lg font-medium text-black-400">
					Course Name: {title}
				</span>

				<span className="block text-lg font-medium text-blue-400">
					Course Price: {price}
				</span>
				<h2 className="text-xl font-semibold tracking-wide">
					Lesson: {Lesson}
				</h2>
			</div>

			<p className="text-lg  font-semibold">
				Do you want to do this course?
			</p>
			
				<button
					onClick={handleCheckout}
					className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white-900"
				>
					Checkout
                </button>
               
		
		</div>
    );
};

export default Checkout;