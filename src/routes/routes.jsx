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
                path: "/allArticles",
                Component: AllArticles
            },
            {
                path: "/postArticle",
                Component: PostArticle
            },
            {
                path: "/myArticles",
                Component: MyArticles
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