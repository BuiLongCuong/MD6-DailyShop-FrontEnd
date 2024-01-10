import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {signIn} from "../../../redux/service/supplierService";
import "./login_supplier.module.css"
import {useNavigate} from "react-router-dom";

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const supplier = useSelector(({supplier}) => {
        // console.log(supplier.currentSupplier)
        return supplier.currentSupplier
    })
    const loginSchema = Yup.object().shape({
        account: Yup.string()
            .required("Vui lòng điền vào mục này."),
        password: Yup.string()
            .required("Vui lòng điền vào mục này.")
    })
    const handleSubmit = (values) => {
        dispatch(signIn(values)).then(() => {
            checkRoleForSupplier();
            resetForm();
        })
    };

    const checkRoleForSupplier = () => {
        const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));

        if (currentSupplier && currentSupplier.roles && currentSupplier.roles.length > 0) {
            const isCustomerOrAdmin = currentSupplier.roles.some(role => role.authority === "ROLE_CUSTOMER" || role.authority === "ROLE_ADMIN");
            if (isCustomerOrAdmin) {
                alert("Tài khoản không tồn tại");
                localStorage.clear();

            } else {
                console.log("Đăng nhập thành công");
                if (currentSupplier.checkProfile === false) {
                    navigate("/addProfileSupplier");
                } else {
                    navigate("/dailyShop")
                }
            }
        }else {
            console.log("Không tìm thấy thông tin người dùng trong localStorage");
        }
    }

    return (
        <>
            <div className="contai">
                <div className="header">
                    <div className="navbar">
                        <div className="left">
                            <div className="logo">
                                <img src="/image/img.png" alt=""/>
                            </div>
                            <div className="user">
                                <span>Kênh Bán Hàng</span>
                            </div>
                        </div>
                        <div className="right">
                            <span>Bạn cần giúp đỡ ?</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="body">
                        <div className="banner">
                            <div className="content-banner">
                                <div className="text">
                                    <span>Bán hàng chuyên nghiệp</span>
                                </div>
                                <div className="text1">
                                    <span>Quản lý shop của bạn một cách hiệu quả hơn trên Shopee với Shopee - Kênh Người bán</span>
                                </div>
                                <div className="logo">
                                    <img src="/image/img_7.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="login">
                            <div className="form-login">
                                <div className="header-login">
                                    <div className="token-login">
                                        <div className="text-login">
                                            <span>Đăng Nhập</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-login">
                                    <div className="body-login">
                                        <div className="input">
                                            <Formik initialValues={{
                                                account: "",
                                                password: ""
                                            }} onSubmit={handleSubmit}
                                                    validationSchema={loginSchema}
                                            >
                                                <Form>
                                                    <div className="input-username">
                                                        <Field className="username" name={"account"}
                                                               placeholder="Email/Số điện thoại/Tên đăng nhập"
                                                        />
                                                        <div className={"errUsername"}><ErrorMessage name={"account"}/>
                                                        </div>
                                                    </div>
                                                    <div className="input-password">
                                                        <Field className="password" type={"password"} name={"password"}
                                                               placeholder="Mật khẩu"/>
                                                        <div className={"errPassword"}><ErrorMessage name={"password"}/>
                                                        </div>
                                                    </div>

                                                    <button className="button" type="submit">
                                                        Đăng Nhập
                                                    </button>
                                                </Form>

                                            </Formik>
                                        </div>
                                        <div className="forgot">
                                            <div className="forgot-password">
                                                <span>Quên Mật Khẩu</span>
                                            </div>
                                            <div className="SMS">
                                                <span>Đăng nhập với SMS</span>
                                            </div>
                                        </div>
                                        <div className="and">
                                            <div className="hr">
                                                <div></div>
                                            </div>
                                            <div className="or">
                                                <span>HOẶC</span>
                                            </div>
                                            <div className="hr2">
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="Oauth">
                                            <div className="google">
                                                <div className="icon-gg">
                                                    <button>
                                                        <i className="fa-brands fa-google"></i>
                                                        <span>Google</span>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="register"></div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*    <!--    <div class="footer"></div>-->*/}
            </div>

        </>
    );
}