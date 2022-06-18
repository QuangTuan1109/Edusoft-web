import './Profile.scss';
import React from 'react'

import logo from '../../../../assets/images/logoIU.webp'
import icondoc from '../../../../assets/images/icon-doc.png'

class Profile extends React.Component {
    render() {
        return(
            <>
            <div className="wrapper-finalexam">
                <div className='grid-item'>
                    <div className='logo-title'>
                        <img src={logo} alt="IUbackground"/>
                        <h3>IU EduSoft</h3>
                    </div>
                    <div className='avt'>
                        <img src="https://baominh.tech/wp-content/uploads/2020/09/nhan-dan-facebook.png" alt="IUbackground"/>
                    </div>
                    <div className='other-info'>
                        <div className='general-info-detail'>
                            <img src={icondoc} alt="icon"/>
                            <div className='text-part'>
                                <a href={'http://google.com'}><label>Thông tin tài khoản</label>
                                <p>Quản lý thông tin đăng nhập và thông tin cá nhân</p></a>
                            </div>
                        </div>
                        <div className='general-info-detail'>
                            <img src={icondoc} alt="icon"/>
                            <div className='text-part'>
                                <a href={'http://google.com'}><label>Thông tin học phí</label>
                                <p>Quản lý tiền học phí các kì và các khoản tiền khác</p></a>
                            </div>
                        </div>
                        <div className='general-info-detail'>
                            <img src={icondoc} alt="icon"/>
                            <div className='text-part'>
                                <a href={'http://google.com'}><label>Thông tin cố vấn học tập</label>
                                <p>Quản lý thông tin liên lạc với cố vấn học tập</p></a>
                            </div>
                        </div>
                        <div className='general-info-detail'>
                            <img src={icondoc} alt="icon"/>
                            <div className='text-part'>
                                <a href={'http://google.com'}><label>Đăng xuất</label>
                                <p>Đăng xuất khỏi trang web</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-item-info'>
                    <div className='title'>
                        <h1>THÔNG TIN QUẢN LÝ</h1>
                    </div>
                    <div className='general-info'>
                    <table>
                        <tr>
                            <td>Họ và Tên:</td>
                            <td><p>Lê Quang Tuấn</p></td>
                        </tr>
                        <tr>
                            <td>Mã số sinh viên:</td>
                            <td><p>ITITIU19232</p></td>
                        </tr>
                        <tr>
                            <td>Địa chỉ:</td>
                            <td><p>Bien Hòa, Đồng Nai</p></td>
                        </tr>
                        <tr>
                            <td>Số điện thoại:</td>
                            <td><p>0774619966</p></td>
                        </tr>
                        <tr>
                            <td>Ngành:</td>
                            <td><p>Information Technology</p></td>
                        </tr>        
                    </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Profile