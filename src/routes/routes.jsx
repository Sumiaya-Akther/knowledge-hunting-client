import {
    createBrowserRouter,
} from "react-router";
import MainLayOut from "../layOut/MainLayOut";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Loading from "../components/loading/Loading";
import Login from "../pages/logIn/Login";
import Register from "../pages/register/Register";
import AllArticles from "../pages/allArticles/AllArticles";
import PostArticle from "../pages/postArticle/PostArticle";
import MyArticles from "../pages/myArticles/MyArticles";
import AboutUs from "../pages/about/AboutUs";
import axios from "axios";
import Articles from "../pages/Ariticles/Articles";
import ArticleDetails from "../pages/articleDetails/ArticleDetails";
import Category from "../pages/category/category";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layOut/Dashboard";
import DashHome from "../components/dashPage/DashHome";
import Profile from "../pages/profile/Profile";
import Contact from "../pages/contact/Contact";
import Support from "../pages/support/Support";
import Report from "../pages/reportPage/Report";
import Faq from "../pages/faqPage/Faq";
import ForgotPassword from "../pages/forgetPass/ForgotPassword";
import DashAllArticle from "../pages/dashAllArticle/DashAllArticle";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";


export const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage></ErrorPage>,
        Component: MainLayOut,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
                loader: () => axios(`${import.meta.env.VITE_API_URL}/articles`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                // path: "/allArticles",
                // Component: AllArticles,
                // loader: () =>axios(`${import.meta.env.VITE_API_URL}/articles`),
                // hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: "/allArticles",
                Component: Articles,
            },
            {
                path: "/category/:categoryName",
                Component: Category,
                loader: ({ params }) => axios.get(`${import.meta.env.VITE_API_URL}/articles/category/${params.categoryName}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/article/:id",
                Component: ArticleDetails,
                loader: ({ params }) => axios(`${import.meta.env.VITE_API_URL}/article/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/about",
                Component: AboutUs
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "/support",
                Component: Support
            },
            {
                path: "/report",
                Component: Report
            },
            {
                path: "/faq",
                Component: Faq
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: "forgotPass",
                Component: ForgotPassword
            }
        ]

    },
    {
        path: "*",
        Component: ErrorPage
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                Component: DashHome,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "postArticle",
                element: <PrivateRoute>
                    <PostArticle></PostArticle>
                </PrivateRoute>
            },
            {
                path: "myArticles",
                element: <PrivateRoute>
                    <MyArticles></MyArticles>
                </PrivateRoute>,
            },
            {
                path: "profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
              {
                path: "edit-profile",
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path: "dashAllArticle",
                element: <PrivateRoute>
                    <DashAllArticle></DashAllArticle>
                </PrivateRoute>
            },

        ]
    }
]);