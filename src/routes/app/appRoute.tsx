import { createBrowserRouter } from "react-router-dom";
import { appRoute } from "../constants";
import { LoginPage } from "@/pages/identity/LoginPage";
import { RegisterPage } from "@/pages/identity/RegisterPage";
import { CallbackIdentityPage } from "@/pages/systems/CallbackIdentityPage";
import { LoadingPage } from "@/pages/systems/LoadingPage";
import { ClientLayout, WhiteLayout, AdminLayout } from "@/layouts";
import { DashboardRoute } from "./dashboardRoute";
import { ClientsRoute } from "./clientsRoute";
// import { ProtectedRoute } from "@/guards";

export const AppRoute = createBrowserRouter([
    {
        path: appRoute.LOGIN,
        element: <LoginPage />
    },
    {
        path: appRoute.REGISTER,
        element: <RegisterPage />
    },
    {
        path: appRoute.CALLBACK_IDENTITY,
        element: <CallbackIdentityPage />
    },
    {
        path: appRoute.LOADING,
        element: <LoadingPage />
    },
    // {
    //     path: `${appRoute.DASHBOARD}/*`,
    //     // errorElement: <ErrorPage />,
    //     element: (
    //         <ProtectedRoute>
    //             <AdminLayout />
    //         </ProtectedRoute>
    //     ),
    //     children: DashboardRoute
    // },
    // {
    //     path: `/*`,
    //     // errorElement: <ErrorPage />,
    //     element: (
    //         <ProtectedRoute>
    //             <ClientLayout />
    //         </ProtectedRoute>
    //     ),
    //     children: ClientsRoute
    // },
    // {
    //     path: `/user/*`,
    //     // errorElement: <ErrorPage />,
    //     element: (
    //         <ProtectedRoute>
    //             <WhiteLayout />
    //         </ProtectedRoute>
    //     ),
    //     children: ClientsRoute
    // },
    {
        path: `${appRoute.DASHBOARD}/*`,
        // errorElement: <ErrorPage />,
        element: (
            <AdminLayout />
        ),
        children: DashboardRoute
    },
    {
        path: `/*`,
        // errorElement: <ErrorPage />,
        element: (
            <ClientLayout />
        ),
        children: ClientsRoute
    },
    {
        path: `/user/*`,
        // errorElement: <ErrorPage />,
        element: (
            <WhiteLayout />
        ),
        children: ClientsRoute
    },
])