import './exam.scss';
import React from 'react'

class Midtermexam extends React.Component {
    render() {
        return(
            <>
            <div className="wrapper-finalexam">
                <div className='options'>
                   <div>
                        <lablel for='sem'>Chọn Học Kỳ Xem Lịch Thi</lablel>
                        <select name='sem'>
                            <option>Học kì 1 - Năm học 2021-2022</option>
                            <option>Học kì 1 - Năm học 2021-2022</option>
                            <option>Học kì 1 - Năm học 2021-2022</option>
                            <option>Học kì 1 - Năm học 2021-2022</option>
                        </select>
                        <button type='button'>In TKB</button>
                   </div>
                </div>
                <div className='info-student'>
                    <table>
                        <tr>
                            <td>Mã số sinh viên</td>
                            <td><p>ITITIU19232</p></td>
                        </tr>
                        <tr>
                            <td>Họ và Tên</td>
                            <td>Lê Quang Tuấn</td>
                        </tr>
                        <tr>
                            <td>Giới tính</td>
                            <td>Nam</td>
                        </tr>
                        <tr>
                            <td>Nơi sinh</td>
                            <td>Đồng Nai</td>
                        </tr>
                        <tr>
                            <td>Lớp</td>
                            <td>ITIT19CS2</td>
                        </tr>
                        <tr>
                            <td>Ngành</td>
                            <td>Information Technology</td>
                        </tr>
                        <tr>
                            <td>Khoa</td>
                            <td>Computer Science & Engineering</td>
                        </tr>
                        <tr>
                            <td>Hệ đào tạo</td>
                            <td>Đại học</td>
                        </tr>
                        <tr>
                            <td>Khóa học</td>
                            <td>2019-2022</td>
                        </tr>
                        <tr>
                            <td>Cố vấn học tập</td>
                            <td>Nguyễn Quang Phú</td>
                        </tr>
                    </table>
                </div>
                <div className='info-schedule'>
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>Mã Môn Học</th>
                            <th>Tên Môn Học</th>
                            <th>Ghép Thi</th>
                            <th>Tổ Thi</th>
                            <th>Số Lượng</th>
                            <th>Ngày Thi</th>
                            <th>Giờ Bắt Đầu</th>
                            <th>Số Phút</th>
                            <th>Phòng</th>
                            <th>Hình Thức Thi</th>
                            <th>Đợt Thi</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td> 
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>  
                        </tr>
                        <tr>
                            <td>6</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
            </>
        )
    }
}

export default Midtermexam