import HeaderHome from "../../components/HeaderHome";
import NavbarHome from "../../components/NavbarHome";
import React from "react";
import {Outlet} from "react-router-dom";
import FooterHome from "../../components/FooterHome";

export default function Home(){
    return(
        <>
            <HeaderHome/>
            <NavbarHome/>
            <Outlet/>
            <FooterHome/>

        </>

    )
}