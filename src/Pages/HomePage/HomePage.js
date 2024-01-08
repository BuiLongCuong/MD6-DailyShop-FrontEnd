import HeaderHomePage from "../../components/HeaderHomePage";
import NavbarHomePage from "../../components/NavbarHomePage";
import FooterHomePage from "../../components/FooterHomePage";
import {Outlet} from "react-router-dom";

export default function HomePage(){
    return(
        <>
            <HeaderHomePage/>
            <NavbarHomePage/>
            <Outlet/>
            <FooterHomePage/>

        </>
    )
}