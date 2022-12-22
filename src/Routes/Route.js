import { createBrowserRouter } from "react-router-dom";
import Course from "../Shared/Course/Course";
import CourseType from "../Pages/CourseType/CourseType";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Checkout from "../Pages/Checkout/Checkout";
import NotFound from "../Pages/NotFound/NotFound";
import DetailsCourse from "../Pages/DetailsCourse/DetailsCourse";
import Blog from "../Pages/Blog/Blog";
import Faq from "../Pages/FAQ/Faq";
import AllCourses from "../Pages/AllCourses/AllCourses";
import About from "../Pages/About/About";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch(`https://lang-learn-server.vercel.app/course`)
            },
            {
                path:'/course-type/:id',
                element:<CourseType></CourseType>,
                loader: ({params}) => fetch(`https://lang-learn-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/cours/:id',
                element:<Course></Course>,
                loader: ({params}) => fetch(`https://lang-learn-server.vercel.app/course-type/${params.id}`)
            },
            {
                path:'/courses',
                element:<AllCourses></AllCourses>,
                loader: () => fetch(`https://lang-learn-server.vercel.app/course`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/details/:id',
                element:<DetailsCourse></DetailsCourse>,
                loader: ({params}) => fetch(`https://lang-learn-server.vercel.app/course-type/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
                loader: ({params}) => fetch(`https://lang-learn-server.vercel.app/course-type/${params.id}`)
            },
            {
				path: '*',
				element: <NotFound></NotFound>
			},
        ]
    }
])