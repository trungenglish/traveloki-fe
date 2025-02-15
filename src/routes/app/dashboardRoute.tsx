import { JSX, lazy, LazyExoticComponent, Suspense } from 'react';
import { RouteObject } from "react-router-dom";

import { HomePage } from "@/pages/admin/home";
import { AirportsListPage } from "@/pages/admin/airports";
import { RoadmapListPage } from "@/pages/admin/roadmap";
import { VehiclesListPage } from "@/pages/admin/vehicles";
import { WaypointsListPage } from "@/pages/admin/waypoints";

import { dashboardRoute } from "../constants";
import { SchedulesListPage } from "@/pages/admin/schedules";
// import { TransactionsListPage } from "@/pages/admin/transactions";


const TransactionsListPage: LazyExoticComponent<() => JSX.Element> = lazy(
    async () => {
      const module: typeof import('@/pages/admin/transactions') =
        await import('@/pages/admin/transactions');
  
      return { default: module.TransactionsListPage };
    },
);

export const DashboardRoute: RouteObject[] = [
    {
        path: '',
        element: (
            <Suspense fallback={<div>...loading</div>}>
                <HomePage />
            </Suspense>
        )
    },
    {
        path: dashboardRoute.AIRPORTS_LIST,
        element: (
            <Suspense fallback={<div>...loading</div>}>
                <AirportsListPage />
            </Suspense>
        )
    },
    {
        path: dashboardRoute.ROADMAP_LIST,
        element: (
            <Suspense fallback={<div>...loading</div>}>
                <RoadmapListPage />
            </Suspense>
        )
    },
    {
        path: dashboardRoute.VEHICLES_LIST,
        element: (
            <Suspense fallback={<div>...loading</div>}>
                <VehiclesListPage />
            </Suspense>
        )
    },
    {
        path: dashboardRoute.WAYPOINTS_LIST,
        element: (
            <Suspense fallback={<div>...loading</div>}>
                <WaypointsListPage />
            </Suspense>
        )
    },
    {
        path: dashboardRoute.SCHEDULES_LIST,
        element: (
            <Suspense fallback={<div>...loading</div>}>
                <SchedulesListPage />
            </Suspense>
        )
    },
    {
        path: dashboardRoute.TRANSACTIONS_LIST,
        element: (
            <Suspense fallback={<div>...loading</div>}>
                <TransactionsListPage />
            </Suspense>
        )
    },
];