import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <h1>
                {/*<Link to={"/dailyShop"}>Home</Link>*/}
                <Link to={'/loginCustomer'}>Đăng nhập</Link> |
                <Link to={'/loginSupplier'}>Kênh người dùng</Link>
            </h1>
        </>
    )
}