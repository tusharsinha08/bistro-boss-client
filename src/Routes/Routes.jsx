import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'shop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },

    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // user only routes-----------
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },

            
            // Admin only routes-------------
            {
                path: 'adminHome',
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: 'addItems',
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: 'manageItems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
                loader : ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'manageBooking',
                element: <AdminRoutes><ManageBooking></ManageBooking></AdminRoutes>
            },
            {
                path: 'allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            }
        ]
    }
]);