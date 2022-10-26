import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RightsideNav from '../../Others/RightsideNav/RightsideNav';
import Allcourses from '../AllCourses/Allcourses';

const Courses = () => {

    const allCourses = useLoaderData();
    console.log(allCourses)
    return (
		<div className="px-4 py-16 mx-auto sm:max md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="flex flex-col lg:flex-row">
				<div className="w-32 mx-auto ">
					<RightsideNav></RightsideNav>
				</div>

				{/* <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"> */}
				<div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-2 ">
					{allCourses.map((Course) => (
                        <Allcourses
                        key={Course.id}
                        Course ={Course}
                        ></Allcourses>
					))}
				</div>
			</div>
		</div>
    );
};

export default Courses;