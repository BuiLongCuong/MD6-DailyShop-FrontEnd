import "./header.css"
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import {FaXTwitter} from "react-icons/fa6";
import {FaRegUser} from "react-icons/fa6";
import {IoMailUnreadOutline} from "react-icons/io5";
import {FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {OutlinedInput, InputAdornment, IconButton} from '@mui/material';

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="header-top">
                    <div className="row">
                        <div className="col-6 header-top-left">
                            <ul>
                                <li><IoMailUnreadOutline/>dailyshop@gmail.com</li>
                                <li>Support diliver</li>
                                <li><Link to={"#"}>Kênh người bán</Link></li>

                            </ul>
                        </div>
                        <div className="col-6  header-top-right">
                            <ul>
                                <li><Link to={"https://web.facebook.com/"}><FaFacebook/></Link></li>
                                <li><Link to={"#"}><FaInstagram/></Link></li>
                                <li><Link to={"#"}><FaXTwitter/></Link></li>
                                <li><Link to={"#"}><FaRegUser/></Link> <span style={{color: 'black'}}>Đăng Nhập</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/*<div className="main-fluid">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-3">*/}
                {/*            <div className="header-logo">*/}
                {/*                <h2>DAILYSHOP</h2>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="col-6">*/}
                {/*            <div className="nav-bar"></div>*/}
                {/*            <ul>*/}
                {/*                <li><Link to={"#"}>TRANG CHỦ</Link></li>*/}
                {/*                <li><Link to={"#"}>CỬA HÀNG</Link></li>*/}
                {/*                <li><Link to={"#"}>SẢN PHÂM</Link></li>*/}
                {/*                <li><Link to={"#"}>BÀI VIẾT</Link></li>*/}
                {/*                <li><Link to={"#"}>LIÊN HỆ</Link></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*        <div className="col-3">*/}
                {/*            <div className="header-cart">*/}
                {/*                <div className="header-cart-price">*/}
                {/*                    <span>5000000</span>*/}
                {/*                </div>*/}
                {/*                <ul>*/}
                {/*                    <li>*/}
                {/*                        <Link to={"#"}><FiShoppingCart /><span>5</span></Link>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <div className="body">
                <div className="main">
                    <div className="main-left">
                        <div className="logo">
                            <img src="../../public/img.png" alt=""/>
                        </div>
                    </div>
                    <div className="main-center">
                        <div className="search-cover">

                            <input type="text" placeholder={"Search..."}/>
                            <button><SearchIcon/></button>


                        </div>


                    </div>
                    <div className="main-right">
                        <div className="header-cart">
                            <ul>
                                <li>
                                    <Link to={"#"}><FiShoppingCart className={"color-white"}/><span>5</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}