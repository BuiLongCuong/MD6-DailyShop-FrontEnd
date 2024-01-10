import Header from "../components/Header/Header";
import {Navbar} from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Body from "../components/Body/Body";

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