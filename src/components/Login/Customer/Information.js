import {Field, Form, Formik} from "formik";

export function Information() {

    return (
        <>
            <div className="main3">
                <div className="headerInfo">
                    <div className="left">
                        <div className="logo">
                            <img src="img_2.png" alt=""/>
                        </div>
                        <div className="title">
                            <div className="detail">
                                <p>Thông tin của tôi</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="account">
                            <p>builongcuong123</p>
                        </div>
                    </div>
                </div>
                <div className="bodyInfo">
                    <div className="contentInfo">
                        <Formik initialValues={
                            {
                                customerName : '',
                                address : '',
                                phone : '',
                                dateOfBirth : ''
                            }
                        } onSubmit={(values) => {
                            console.log(values)
                        }}>
                            <Form>
                        <div className="infoDetails">
                            <div className="infoName">
                                <div className="noteName">
                                    <p>Tên</p>
                                </div>
                                <div className="name">
                                    <Field type="text" name="customerName"/>
                                </div>
                            </div>
                            <div className="infoAddress">
                                <div className="noteAddress">
                                    <p>Địa chỉ</p>
                                </div>
                                <div className="address">
                                    <Field type="text" name="address"/>
                                </div>
                            </div>
                            <div className="infoPhone">
                                <div className="notePhone">
                                    <p>Số điện thoại</p>
                                </div>
                                <div className="phone">
                                    <Field type="text" name="phone"/>
                                </div>
                            </div>
                            <div className="infoBirthday">
                                <div className="noteBirthday">
                                    <p>Ngày sinh</p>
                                </div>
                                <div class="birthday">
                                    <Field type="date" name="dateOfBirth"/>
                                </div>
                            </div>
                            <div class="decision">
                                <div class="cancel">
                                    <button type={"submit"}>Hủy</button>
                                </div>
                                <div class="save">
                                    <button type={"submit"}>Lưu</button>
                                </div>
                            </div>
                        </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}