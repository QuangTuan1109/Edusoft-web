import React from 'react';
import {
    NavLink
  } from 'react-router-dom';

import './nav.scss';
class Nav extends React.Component{
    render() {
        return (
            <div className="Navbar">
                <ul>
                <li><NavLink activeClassName="active" to="/home-page" exact={true}>Trang chủ</NavLink></li>
                <li><NavLink activeClassName="active" to="/register-course">Đăng kí môn học</NavLink></li>
                <li><NavLink activeClassName="active" to="/time-table">Thời khóa biểu</NavLink></li>
                <li><NavLink activeClassName="active" to="/final-schedule">Lịch thi cuối kì</NavLink></li>
                <li><NavLink activeClassName="active" to="/mid-schedule">Lịch thi giữa kì</NavLink></li>
                <li><NavLink activeClassName="active" to="/bill">Xem học phí</NavLink></li>
                <li><NavLink activeClassName="active" to="/home-page">Sơ đồ đại học</NavLink></li>
                <li><NavLink activeClassName="active" to="/score">Xem điểm</NavLink></li>
                <li><NavLink activeClassName="active" to="/program">Xem CTĐT</NavLink></li>
                <li><NavLink activeClassName="active" to="/prerequisite">Xem môn TQ</NavLink></li>
                <li><NavLink activeClassName="active" to="/profile">Thông tin cá nhân</NavLink></li>
                <li><NavLink activeClassName="active" to="/home-page">Góp ý</NavLink></li>
                <li><NavLink activeClassName="active" to="/home-page">Đánh giá giảng dạy</NavLink></li>
                <li><NavLink activeClassName="active" to="/home-page">Hóa đơn điện tử</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Nav