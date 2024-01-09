import "./Body.css"
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
export default function Body(){
    return(
        <>
            <div className="body">
                <div className="side-bar">
                    <div className="side-bar-above">
                        <div className="side-bar-above-left">

                        </div>
                        <div className="side-bar-above-right">
                            <ul>
                                <li><Link to={"#"}>Thiết bị điện tử</Link></li>
                                <li><Link to={"#"}>Phụ kiện điện tử</Link></li>
                                <li><Link to={"#"}>Sức khỏe và làm đẹp</Link></li>
                                <li><Link to={"#"}>Thực phẩm tươi</Link></li>
                                <li><Link to={"#"}>Du lịch</Link></li>
                                <li><Link to={"#"}>Phụ kiện nữ giới</Link></li>
                                <li><Link to={"#"}>Phụ kiện trẻ em</Link></li>
                                <li><Link to={"#"}>Phụ kiện nam giới</Link></li>
                                <li><Link to={"#"}>Thiết bị điện gia dụng</Link></li>
                                <li><Link to={"#"}>Thiết bị định vị</Link></li>
                                <li><Link to={"#"}>Hàng gia dụng</Link></li>

                            </ul>
                        </div>
                    </div>
                    <div className="side-bar-bottom">
                        <div className={"card-title"}><h5> Thanh toán </h5></div>
                        <div className="card">
                            <p className="visa"></p>
                            <p className="master-card"></p>
                            <span className="jcb"></span>
                            <span className="cash-on-diliver"></span>
                            <span className="napas"></span>
                            <span className="zalo-pay"></span>
                        </div>


                    </div>
                </div>
                <div className="main-body">
                    <div className="main-body-above">
                        <div className="slider">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img src="https://img.lazcdn.com/g/ff/kf/S37b1d4e85fcd4862a73b078de1038f0c8.jpg_720x720q80.jpg_.webp" alt=""/>
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="https://img.lazcdn.com/g/ff/kf/S4036a649afc040deb58a1d3078b0145bH.jpg_2200x2200q80.jpg_.webp" alt=""/>
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src="https://down-vn.img.susercontent.com/file/50d3c70b379f6d0743ed1321c3c7174a" alt=""/>

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="main-body-above-right">
                            <div className="main-body-above-right-a">
                                <img src="https://down-vn.img.susercontent.com/file/vn-50009109-d74fb5fe87afd27e57ae42eba3a0b7ac" alt=""/>
                            </div>
                            <div className="main-body-above-right-b">
                                <img src="https://vietproducer.com/wp-content/uploads/2023/09/quang-cao-pepsi-01-min-1024x640.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="main-body-bottom"></div>

                </div>
                <div className="ads">
                    <div className="ads-above">
                        <img src="http://vintagewine.vn/wp-content/uploads/2023/04/con-bao-nhieu-ngay-nua-den-tet1-2-300x214.jpg" alt=""/>
                    </div>
                    <div className="ads-bottom">
                        <img src="http://vintagewine.vn/wp-content/uploads/2023/04/nhung-cau-chuc-tet-hay-scaled-1-300x262.webp" alt=""/>
                    </div>
                    <div className="ads-bottom-bottom">
                        <img src="http://vintagewine.vn/wp-content/uploads/2023/04/loi-chuc-tet-chuc-mung-nam-moi-300x214.jpg" alt=""/>
                    </div>
                </div>
            </div>

        </>
    )
}