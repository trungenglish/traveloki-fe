import Footer from "../components/client/layout/Footer.jsx";
import {Outlet} from "react-router-dom";
import Header from "../components/client/layout/Header.jsx";

export const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}