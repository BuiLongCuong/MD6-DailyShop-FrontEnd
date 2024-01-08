import HeaderHome from "../../components/HeaderHome";
import NavbarHome from "../../components/NavbarHome";
import React from "react";
import {Outlet} from "react-router-dom";
import FooterHome from "../../components/FooterHome";
import Header from "../../components/Header";
import Body from "../../components/Body";

export default function Home(){
    return(
        <>
            <Header/>
            <NavbarHome/>
            <Body/>
            <Outlet/>
            <FooterHome/>

        </>

    )
}