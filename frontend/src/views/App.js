import LoginPage from "../views/page/login/LoginPage.js";
import HomePage from "../views/page/student/homepage/Homepage.js";
import Timetable from "../views/page/student/timetable/Timetable.js";

import logo from '../assets/images/logoIU.webp'

import './App.scss';

function App() {
  return (
    <>
      <header>
        <div className="logo-img">
          <img src={logo} alt="IUbackground"/>
          <h1>IU EduSoft</h1>
        </div>
        <div className="Navbar">
          <ul>
            <li><a class="active" href="#home">Trang chủ</a></li>
            <li><a href="#news">Đăng kí môn học</a></li>
            <li><a href="#contact">Thời khóa biểu</a></li>
            <li><a href="#about">Lịch thi cuối kì</a></li>
            <li><a href="#about">Lịch thi giữa kì</a></li>
            <li><a href="#about">Xem học phí</a></li>
            <li><a href="#about">Đóng tiền học phí</a></li>
            <li><a href="#about">Xem điểm</a></li>
            <li><a href="#about">Xem CTĐT</a></li>
            <li><a href="#about">Xem môn TQ</a></li>
            <li><a href="#about">Sửa thông tin cá nhân</a></li>
            <li><a href="#about">Góp ý</a></li>
            <li><a href="#about">Đánh giá giảng dạy</a></li>
            <li><a href="#about">Hóa đơn điện tử</a></li>
          </ul>
        </div>
      </header>

      <body>
       { /*<LoginPage />*/}
        {/* <HomePage /> */}
        <Timetable /> 

      </body>
    </>
  );
}

export default App;
