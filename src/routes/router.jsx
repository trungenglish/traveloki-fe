import {createBrowserRouter} from "react-router-dom";
import {PageNotFound} from "../pages/SystemPage/PageNotFound.jsx";
import {MainLayout} from "../layouts/MainLayout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";

export const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        errorElement: <PageNotFound/>,
        children:[
            {
                index: true,
                element: <HomePage/>,
            }
        ]
    },
])