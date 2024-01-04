import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <h1>
                {/*<Link to={"/dailyShop"}>Home</Link>*/}
                <Link to={'/login'}>Đăng nhập</Link> |
                <Link to={'/signIn'}>Kênh người dùng</Link>
            </h1>
        </>
    )
}