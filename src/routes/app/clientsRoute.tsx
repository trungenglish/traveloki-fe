import { HomePage } from "@/pages/clients/home";
import { Suspense } from "react";
import { RouteObject } from "react-router-dom";

export const ClientsRoute: RouteObject[] = [
    {
        path: '',
        element: (
            <Suspense fallback={<div>...loading</div>}>
                <HomePage />
            </Suspense>
        )
    },
];