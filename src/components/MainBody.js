import "./MainBody.css"
import MainBodyAbove from "./MainBodyAbove";
import {Outlet} from "react-router-dom";
export default function MainBody(){
    return(
        <>
            <MainBodyAbove/>
            <Outlet/>
        </>
    )
}