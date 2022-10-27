import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import DetailCourse from "../../components/DetailCourse/DetailCourse";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import Checkout from "../../Others/Checkout/Checkout";
import ErrorPage from "../../Others/ErrorPage/ErrorPage";
import Profile from "../../Others/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
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
				path: "/courses",
				element: <Courses></Courses>,
				loader: () =>
					fetch(
						"https://education-server-sigma.vercel.app/allcourse"
					),
			},
			{
				path: "/course/:id",
				element: <DetailCourse></DetailCourse>,
				loader: ({ params }) =>
					fetch(
						`https://education-server-sigma.vercel.app/course/${params.id}`
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
				element: (
					<PrivateRoute>
						<Checkout></Checkout>{" "}
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://education-server-sigma.vercel.app/course/${params.id}`
					),
			},
			{
				path: "/profile",
				element: (
					<PrivateRoute>
						<Profile></Profile>
					</PrivateRoute>
				),
			},
		],
	},
]);
