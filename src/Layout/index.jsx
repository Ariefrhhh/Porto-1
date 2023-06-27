import React from "react";
import Header from "../Component/Home/Header";
import Footer from "../Component/Home/Footer";
import PublicRoutes from "../Config/Router";


const Layout = (props) => {
    return(
        <div>
            <Header/>
            <PublicRoutes/>
            <Footer/>
        </div>
    )
}

export default Layout