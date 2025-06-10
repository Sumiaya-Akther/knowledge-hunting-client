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
                path: "/article/:id",
                Component: ArticleDetails,
                loader: ({params}) =>axios(`${import.meta.env.VITE_API_URL}/article/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/postArticle",
                Component: PostArticle
            },
            {
                path: "/myArticles",
                Component: MyArticles,
                // loader: ({params}) =>axios(`${import.meta.env.VITE_API_URL}/my-articles/${params.email}`),
                // hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/aboutUs",
                Component: AboutUs
            }
        ]

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
        path: "*",
        Component: ErrorPage
    }
]);