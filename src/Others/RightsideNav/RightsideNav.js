import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RightsideNav = () => {
	const [courses, setcourses] = useState([]);

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		fetch("https://education-server-sigma.vercel.app/course")
			.then((res) => res.json())
			.then((data) => {
				setcourses(data)
setLoading(false)

			}
				
		)
		setLoading(true)
	}, []);

if (loading) {
	return (
		<div className="w-10 mx-auto m-6 h-10 border-4 border-dashed rounded-full animate-spin border-black"></div>
	);
}

	return (
		<div>
			<h1 className="text-2xl text-blue-500">
				{/* All Course-{courses.length} */}
				All Courses
			</h1>
			{courses.map((course) => (
				<p
					className="m-2 text-2xl underline  decoration-blue-500"
					key={course.id}
				>
					<Link to={`/course/${course.id}`}>
						{course?.name}
					</Link>
				</p>
			))}
		</div>
	);
};

export default RightsideNav;
