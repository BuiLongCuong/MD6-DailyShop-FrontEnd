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
                        <div className="infoDetails">
                            <div className="infoName">
                                <div className="noteName">
                                    <p>Tên</p>
                                </div>
                                <div className="name">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="infoAddress">
                                <div className="noteAddress">
                                    <p>Địa chỉ</p>
                                </div>
                                <div className="address">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="infoPhone">
                                <div className="notePhone">
                                    <p>Số điện thoại</p>
                                </div>
                                <div className="phone">
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="infoBirthday">
                                <div className="noteBirthday">
                                    <p>Ngày sinh</p>
                                </div>
                                <div class="birthday">
                                    <input type="date"/>
                                </div>
                            </div>
                            <div class="decision">
                                <div class="cancel">
                                    <button>Hủy</button>
                                </div>
                                <div class="save">
                                    <button>Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}