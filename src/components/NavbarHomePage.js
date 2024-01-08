import {Link} from "react-router-dom";

export default function NavbarHomePage(){
    return(
        <>
            <div>
                <h1>
                    <Link to={"/products/homePage"}>HomePage</Link>|
                    <Link to={"/products/add"}>AddProduct</Link>
                </h1>

            </div>
        </>
    )
}