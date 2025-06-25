import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import '../App.css'
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateGroup from "../pages/CreateGroup";
import PrivateRouter from "../provider/PrivateRouter";
import Mygroups from "../pages/Mygroups";
import MyGroupsDetail from "../pages/MyGroupsDetail";
import Loading from "../components/Loading";
import UpdateGroup from "../components/UpdateGroup";
import Allgroups from "../pages/Allgroups";
import AllGroupDetails from "../pages/AllGroupDetails";
import Error from "../components/Error";

export const router = createBrowserRouter(
    [
        {
            path: '/',
             loader: () => fetch('https://hobby-hub-server-rouge.vercel.app/groups'),
            element: <MainLayout></MainLayout>,
            hydrateFallbackElement:<Loading></Loading>
,
        },
        {
            path: '/login',
            hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>,

            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>,
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path: '/*',
            element:<Error></Error>
        },
        {
            path: '/groupUpdate/:id',
            loader: () => fetch('https://hobby-hub-server-rouge.vercel.app/groups'),

            element:<PrivateRouter><UpdateGroup></UpdateGroup></PrivateRouter>
            
        },
        {
            path: '/createGroup',
            element:<PrivateRouter> 
                <CreateGroup></CreateGroup>
                </PrivateRouter>
                ,
                hydrateFallbackElement:<Loading></Loading>
           
        },
        
        {
            path: '/all-groups',
            loader: () => fetch('https://hobby-hub-server-rouge.vercel.app/groups'),
            element:<Allgroups></Allgroups>,
            hydrateFallbackElement:<Loading></Loading>
           
        },
        {
            path: '/all-groups/:_id',
            loader: () => fetch('https://hobby-hub-server-rouge.vercel.app/groups'),
            element:
            <PrivateRouter><AllGroupDetails></AllGroupDetails></PrivateRouter>
           
        },
        {
            path: '/mygroups/',
            loader: ()=>fetch('https://hobby-hub-server-rouge.vercel.app/groups'),
            element:<PrivateRouter> 
                <Mygroups></Mygroups>
                
                </PrivateRouter>,
                hydrateFallbackElement:<Loading></Loading>
           
        },
        {
            path: '/mygroups/:_id',
            loader: ()=>fetch('https://hobby-hub-server-rouge.vercel.app/groups'),
            element:<PrivateRouter> 
                <MyGroupsDetail></MyGroupsDetail>
                
                </PrivateRouter>,
                hydrateFallbackElement:<Loading></Loading>
           
        }
    ]
)