import * as React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {register} from "../../../redux/service/axios/getAxios";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import "./signUp_supplier.module.css"




export default function SignUp() {
    const navigate = useNavigate()
    const accountSchema = Yup.object().shape({
        account: Yup.string()
            .required("Vui lòng điền vào mục này.")
            .min(3, "Kí tự không đủ.")
            .max(10, "Kí tự quá dài."),
        password: Yup.string()
            .required("Vui lòng điền vào mục này.")
            .min(2, "Kí tự không đủ.")
            .max(10, "Kí tự quá dài."),
        confirmPassword: Yup.string()
            .required("Vui lòng điền vào mục này.")
            .min(2, "Kí tự không đủ.")
            .max(10, "Kí tự quá dài."),
        email: Yup.string()
            .required("Vui lòng điền vào mục này.")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Nhập đúng định dạng")

    })
    const handleSubmit =async (values) => {
        console.log(values)
        await register(values)
        navigate("/signIn")
    };

    return (
        <>
            <div className="cont">
                <div className="header-signup">
                    <div className="navbar-signup">
                        <div className="left-signup">
                            <div className="logo-signup">
                                <img src="/image/img.png" alt=""/>
                            </div>
                            <div className="text-signup">
                                <span >Đăng ký</span>
                            </div>
                        </div>
                        <div className="right-signup">
                            <span>Bạn cần giúp đỡ</span>
                        </div>
                    </div>
                </div>
                <div className="body-signup">
                    <div className="content-signup">
                        <div className="textarea-signup">
                            <div className="form-text-signup">
                                <div className="shoppe-signup">
                                    Daily Việt Nam
                                </div>
                                <div className="supplier-signup">
                                    Trở thành người bán ngay hôm nay
                                </div>
                                <div className="internet-signup">
                                    <div className="logo-signup">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="text-signup">
                                        Nền tảng thương mại điện tử hàng đầu Đông Nam Á và Đài Loan
                                    </div>
                                </div>
                                <div className="trademark-signup">
                                    <div className="logo-signup">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="text-signup">
                                        Phát triển trở thành thương hiệu toàn cầu
                                    </div>
                                </div>
                                <div className="vn-signup">
                                    <div className="logo-signup">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="text-signup">
                                        Dẫn đầu lượng người dùng trên ứng dụng mua sắm tại Việt Nam
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-login-signup">
                            <div className="register-signup">
                                <div className="text-signup">
                                    <span>Đăng Ký</span>
                                </div>
                                <div className="forme">
                                    <Formik initialValues={
                                        {
                                            account: "",
                                            password: "",
                                            confirmPassword: "",
                                            email: ""
                                        }
                                    } onSubmit={handleSubmit}
                                            validationSchema={accountSchema}>
                                        <Form>
                                            <div className="text5">
                                                <div className="input1">
                                                    <Field type="text" className={"account-signup"} name={"account"}
                                                           placeholder={"Username"}/>
                                                    <div className={"account-signup-err"}><ErrorMessage
                                                        name={"account"}/></div>
                                                </div>
                                                <div className="input2">
                                                    <Field type="text" className={"password-signup"} name={"password"}
                                                           placeholder={"Mật Khẩu"}/>

                                                    <div className={"password-signup-err"}><ErrorMessage
                                                        name={"password"}/></div>
                                                </div>
                                            </div>
                                            <div className="text6">
                                                <div className="input3">
                                                    <Field type="text" className={"confirm-signup"}
                                                           name={"confirmPassword"} placeholder={"Xác Thực Mk"}/>
                                                    <div className={"confirm-signup-err"}><ErrorMessage
                                                        name={"confirmPassword"}/></div>
                                                </div>
                                                <div className="input4">
                                                    <Field type="text" className={"email-signup"} name={"email"}
                                                           placeholder={"Email"}/>
                                                    <div className={"email-signup-err"}><ErrorMessage
                                                        name={"email"}/></div>
                                                </div>
                                                <div className={"btn"}>
                                                    <button type={"submit"}>Đăng Ký</button>
                                                </div>
                                            </div>

                                        </Form>
                                    </Formik>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-signup ">
                    <div className="mkt-signup">
                        <div className="daily-signup">
                            <div className="header-signup ">
                                TẠI SAO NÊN BÁN HÀNG TRÊN DAILY
                            </div>
                        </div>
                        <div className="body-signup">
                            <div className="navbar-signup ">
                                <div className="col1-signup ">
                                    <div className="fr-signup ">
                                        <div className="image-signup ">
                                            <img src="/image/img_1.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mkt-signup ">
                                        Miễn phí đăng ký
                                    </div>
                                    <div className="ship-signup ">
                                        Mở Shop và bán hàng dễ dàng hơn cùng Shopee!
                                    </div>
                                </div>
                                <div className="col2-signup ">
                                    <div className="fr-signup ">
                                        <div className="images-signup ">
                                            <img src="/image/img_2.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mkt-signup ">
                                        Công cụ marketing đa dạng
                                    </div>
                                    <div className="ship-signup ">
                                        Thu hút người mua và tăng trưởng đơn hàng với tính năng Flash Sale, Livestream,
                                        Mua Kèm Deal
                                        Sốc,...
                                    </div>
                                </div>
                                <div className="col3-signup ">
                                    <div className="fr-signup ">
                                        <div className="img-signup ">
                                            <img src="/image/img_3.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mkt-signup ">Vận chuyển dễ dàng</div>
                                    <div className="ship-signup ">Linh hoạt lựa chọn đơn vị vận chuyển và theo dõi chi
                                        tiết hành trình
                                        đơn
                                        hàng.
                                    </div>
                                </div>
                            </div>
                            <div className="contents-signup ">
                                <div className="col4-signup ">
                                    <div className="frs-signup ">
                                        <div className="img-signup ">
                                            <img src="/image/img_4.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mkt-signup ">
                                        Siêu sale cùng Daily
                                    </div>
                                    <div className="ship-signup ">Bứt phá doanh số với các chiến dịch lớn: 9.9 Ngày Siêu Mua
                                        Sắm, 11.11
                                        Siêu
                                        Sale,...
                                    </div>
                                </div>
                                <div className="col5-signup ">
                                    <div className="fre-signup ">
                                        <div className="imge-signup ">
                                            <img src="/image/img_5.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mkt-signup ">
                                        Hỗ trợ bán hàng hiệu quả
                                    </div>
                                    <div className="ship-signup ">Đa dạng tính năng giúp quản lý, tương tác với khách hàng
                                        và theo dõi
                                        hiệu quả
                                        hoạt động của Shop.
                                    </div>
                                </div>
                                <div className="col6-signup ">
                                    <div className="f-signup ">
                                        <div className="in-signup ">
                                            <img src="/image/img_6.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="mkt-signup ">
                                        Kết nối cộng đồng Người bán
                                    </div>
                                    <div className="ship-signup ">
                                        Chia sẻ kinh nghiệm bán hàng thực tế thông qua các hội thảo, khóa học trực tuyến
                                        và cổng
                                        thông tin hỗ trợ.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
