import * as React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../../../redux/service/customerService";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import "./login.module.css"

export default function Login() {
    const loginSchema = Yup.object().shape({
        account: Yup.string()
            .min(2, 'Tên tài khoản quá ngắn (tối thiểu 2 ký tự)!')
            .max(50, 'Tên tài khoản quá dài (tối đa 50 ký tự)!')
            .matches(/^[a-zA-Z0-9_]+$/, 'Tên tài khoản không được chứa ký tự đặc biệt hoặc có dấu!')
            .required('Vui lòng nhập đủ thông tin!'),
        password: Yup.string()
            .min(5, 'Mật khẩu quá ngắn (tối thiểu 5 ký tự)!')
            .max(50, 'Mật khẩu quá dài (tối đa 50 ký tự)!')
            .matches(/^[a-zA-Z0-9_]+$/, 'Mật khẩu không được chứa ký tự đặc biệt hoặc có dấu!')
            .required('Vui lòng nhập đủ thông tin!'),
    });
    const dispatch = useDispatch()
    return (
        <>
            <div className="main1">
                <div className="header">
                    <div className="headerDetail">
                        <div className="left">
                            <div className="logo">
                                <img src="img_2.png"
                                     alt=""/>
                            </div>
                            <div className="title">
                                Đăng nhập
                            </div>
                        </div>
                        <div className="right">
                            <p>Bạn cần giúp đỡ?</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="background">
                        <img src="img_6.png" alt=""/>
                    </div>
                    <div className="Login">
                        <div className="row1">
                            <div className="intro">
                                <p>Đăng nhập</p>
                            </div>
                        </div>

                        <div className="row2">
                            <Formik initialValues={
                                {
                                    account: '',
                                    password: ''
                                }
                            } onSubmit={(values) => {
                                console.log(values);
                                dispatch(login(values)).then(() => {
                                    console.log("đăng nhập thành công")
                                })
                            }}
                                    validationSchema={loginSchema}
                            >
                                <Form>
                                    <div className="usernameLogin">
                                        <Field type="text" name="account" placeholder="Tên đăng nhập"/>
                                        <div className="validate">
                                            <p style={{color: "red"}}> <ErrorMessage name={"account"}/></p>
                                        </div>
                                    </div>
                                    <div className="passwordLogin">
                                        <Field type="password" name="password" placeholder="Mật khẩu"/>
                                        <div className="validate">
                                            <p style={{color: "red"}}> <ErrorMessage name={"password"}/></p>
                                        </div>
                                    </div>
                                    <div className="buttonLogin">
                                        <button type="submit">ĐĂNG NHẬP</button>
                                    </div>
                                </Form>
                            </Formik>
                            <div className="note">
                                <div className="col1"></div>
                                <div className="col2">
                                    HOẶC
                                </div>
                                <div className="col3"></div>
                            </div>
                            <div className="other">
                                <div className="loginGoogle">
                                    <button style={{justifyContent: "center"}}>
                                        <div className="icon"><img src="img.png" alt=""
                                                                   style={{width: "25px", height: "25px"}}/></div>
                                        <div className="press">Google</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row3">
                            <div className="Register">
                                Bạn chưa có tài khoản ?
                                <Link to={"/register"}><p>Đăng ký</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer"></div>
            </div>
        </>
    )
}