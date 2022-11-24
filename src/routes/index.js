import Login from "../components/pages/login/Login"
import Home from "../components/pages/home/Home"
import Register from "../components/pages/register/Register"
import ProfileLayout from "../components/pages/profile/ProfileLayout"
import AuthLayout from "./AuthLayout"
import PrivateRoutes from "./PrivateRoute"
import HomeLayout from "../components/pages/home/HomeLayout"
import Posts from "../components/pages/profile/Posts"
import Saved from "../components/pages/profile/Saved"
import Tagged from "../components/pages/profile/Tagged"
import EditProfile from "../components/pages/profile/editprofile/EditProfile"
import InboxLayout from "../components/pages/inbox/InboxLayout"
import WithoutChat  from "../components/pages/inbox/WithoutChat"
import Chat  from "../components/pages/inbox/components/Chat"


const routes = [
    {
        path: "/",
        element: <PrivateRoutes> <HomeLayout/> </PrivateRoutes>,
        children: [
            {
                index: true,    
                element: <Home/> 
            },
            {
                path: ':username/accounts/edit',
                element: <PrivateRoutes><EditProfile/></PrivateRoutes>
            },
            {
                path: 'inbox',
                element: <PrivateRoutes><InboxLayout/></PrivateRoutes>,
                children: [
                    {
                        index: true,
                        element: <WithoutChat/>
                    },
                    {
                        path: ':id',
                        element: <Chat/> 
                    }
                ]
            },
            {
                path:':username',
                element: <PrivateRoutes><ProfileLayout/></PrivateRoutes> ,
                children: [
                    {
                        index: true,
                        element: <Posts/>
                    },
                    {
                        path: 'saved',
                        element: <Saved/>
                    },
                    {
                        path: 'tagged',
                        element: <Tagged/>
                    },
                    
                ]
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
        ]
    },
    
    
]

export default routes