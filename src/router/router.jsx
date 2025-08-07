import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h1>Route not found</h1>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/apply-job/:id',
                element: <PrivateRoute><ApplyJob /></PrivateRoute>,
            },
            {
                path: '/my-application',
                element: <PrivateRoute><MyApplication /></PrivateRoute>
            },
            {
                path: '/add-job',
                element: <PrivateRoute> <AddJob /></PrivateRoute>
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute> <MyPostedJobs /></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/signin',
                element: <SignIn />
            }
        ]
    },
]);

export default router;