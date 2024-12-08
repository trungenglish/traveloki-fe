import Header from "../components/admin/layout/Header.jsx";
import Box from "@mui/material/Box";
import {Outlet} from "react-router-dom";
import SideNav from "../components/admin/layout/SideNav.jsx";

export const AdminLayout = () => {
    return(
        <>
            <Header />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}
