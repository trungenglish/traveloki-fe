import Footer from "../components/client/layout/Footer.js";
import {Outlet} from "react-router-dom";
import Header from "../components/client/layout/Header.js";

export const ClientLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}