import {Header} from "../components/Header";
import {Navbar} from "../components/Navbar";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/Footer";

export default function HomeSimple() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}