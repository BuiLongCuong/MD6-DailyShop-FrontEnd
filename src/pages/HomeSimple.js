import Header from "../components/Header";
import {Navbar} from "../components/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Body from "../components/Body";

export default function HomeSimple() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Body/>

            <Footer/>
        </>
    )
}