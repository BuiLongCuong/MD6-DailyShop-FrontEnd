import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {register} from "../../../redux/service/customerService";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";

export default function Register() {
    const registerSchema = Yup.object().shape({
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
        email: Yup.string()
            .email('Email không hợp lệ!')
            .required('Vui lòng nhập đủ thông tin!'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Xác nhận mật khẩu không khớp!')
            .required('Vui lòng nhập đủ thông tin!'),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <div className="main2">
                <div className="header">
                    <div className="headerDetail">
                        <div className="left">
                            <div className="logo">
                                <img src="img_2.png"
                                     alt=""/>
                            </div>
                            <div className="title">
                                Đăng ký
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
                    <div className="register">
                        <div className="row1">
                            <div className="intro">
                                <p>Đăng ký</p>
                            </div>
                        </div>
                        <div className="row2">
                            <Formik initialValues={
                                {
                                    account: '',
                                    password: '',
                                    email: '',
                                    confirmPassword: ''
                                }
                            }
                                    onSubmit={(values) => {
                                        register(values).then(() => {
                                            console.log("đăng ký thành công")
                                            navigate("/login")
                                        })
                                    }}
                                    validationSchema={registerSchema}
                            >
                                <Form>
                                    <div className="usernameOfRegister">
                                        <Field name={"account"} type="text" placeholder="Tên đăng nhập"/>
                                        <div className="validate">
                                            <p style={{color: "red"}}><ErrorMessage name={"account"}/></p>
                                        </div>
                                    </div>
                                    <div className="passwordOfRegister">
                                        <Field name={"password"} type="password" placeholder="Mật khẩu"/>
                                        <div className="validate">
                                            <p style={{color: "red"}}><ErrorMessage name={"password"}/></p>
                                        </div>
                                    </div>
                                    <div className="email">
                                        <Field name={"email"} type="email" placeholder="Email"/>
                                        <div className="validate">
                                            <p style={{color: "red"}}><ErrorMessage name={"email"}/></p>
                                        </div>
                                    </div>

                                    <div className="confirmPassword">
                                        <Field name={"confirmPassword"} type="password"
                                               placeholder="Nhập lại mật khẩu"/>
                                        <div className="validate">
                                            <p style={{color: "red"}}><ErrorMessage name={"confirmPassword"}/></p>
                                        </div>
                                    </div>
                                    <div className="buttonRegister">
                                        <button>ĐĂNG KÝ</button>
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
                                <div class="registerGoogle">
                                    <button style={{justifyContent: "center"}}>
                                        <div class="icon"><img src="img.png" alt=""
                                                               style={{width: "25px", height: "25px"}}/></div>
                                        <div class="press">Google</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row3">
                            <div class="login">
                                Bạn đã có tài khoản ?
                                <Link to={"/login"}><p>Đăng nhập</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer"></div>
            </div>
        </>
    )
}