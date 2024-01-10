import "./MainBodySupplier.css"
import MainBodyAboveSupplier from "./MainBodyAboveSupplier";

import {Outlet} from "react-router-dom";
export default function MainBodySupplier(){
    return(
        <>
            <div className="main-body">
                <MainBodyAboveSupplier/>
                <Outlet/>

            </div>
        </>
    )
}