import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import DetailCourse from "../../components/DetailCourse/DetailCourse";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import Checkout from "../../Others/Checkout/Checkout";



export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/home",
				element: <Home></Home>,
			},
			{
				path: "courses",
				element: <Courses></Courses>,
				loader: () =>
					fetch("http://localhost:5000/allcourse"),
			},
			{
				path: "/course/:id",
				element: <DetailCourse></DetailCourse>,
				loader: ({ params }) =>
					fetch(
						`http://localhost:5000/course/${params.id}`
					),
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
			{
				path: "/checkout/:id",
				element: <Checkout></Checkout>,
loader: ({ params }) =>fetch(`http://localhost:5000/course/${params.id}`),
			},
		],
	},
]);