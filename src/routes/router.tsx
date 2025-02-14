import {createBrowserRouter} from "react-router-dom";
import { AdminLayout } from "../layouts/adminLayout";
import { ClientLayout } from "../layouts/clientLayout";
import { PageNotFound } from "../pages/systems/PageNotFound";
import HomePage from "../pages/clients/homePage";

export const router = createBrowserRouter([
    {
        // path: "",
        element: <ClientLayout/>,
        errorElement: <PageNotFound/>,
        children:[
            {
                index: true,
                element: <HomePage/>,
            }
        ]
    },
    {
        path: "admin",
        element: <AdminLayout/>,
        errorElement: <PageNotFound/>,
    }
])