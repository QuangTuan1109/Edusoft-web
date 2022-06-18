import './Score.scss';
import React from 'react'

class Score extends React.Component {
    render() {
        return(
            <>
            <div className="wrapper-finalexam">
                <div className='info-student'>
                    <table>
                        <tr>
                            <td>Mã số sinh viên</td>
                            <td><p>ITITIU19232</p></td>
                        </tr>
                        <tr>
                            <td>Họ và Tên</td>
                            <td><p>Lê Quang Tuấn</p></td>
                        </tr>
                        <tr>
                            <td>Giới tính</td>
                            <td><p>Nam</p></td>
                        </tr>
                        <tr>
                            <td>Nơi sinh</td>
                            <td><p>Đồng Nai</p></td>
                        </tr>
                        <tr>
                            <td>Lớp</td>
                            <td><p>ITIT19CS2</p></td>
                        </tr>
                        <tr>
                            <td>Ngành</td>
                            <td><p>Information Technology</p></td>
                        </tr>
                        <tr>
                            <td>Khoa</td>
                            <td><p>Computer Science & Engineering</p></td>
                        </tr>
                        <tr>
                            <td>Hệ đào tạo</td>
                            <td><p>Đại học</p></td>
                        </tr>
                        <tr>
                            <td>Khóa học</td>
                            <td><p>2019-2022</p></td>
                        </tr>
                        <tr>
                            <td>Cố vấn học tập</td>
                            <td><p>Nguyễn Quang Phú</p></td>
                        </tr>
                    </table>
                </div>
                <div className='info-schedule'>
                    <table>
                        <tr bgcolor='#B0E0E6'>
                            <th>STT</th>
                            <th>Mã Môn Học</th>
                            <th>Tên Môn Học</th>
                            <th>Số Tín Chỉ</th>
                            <th>% Quá Trình</th>
                            <th>% Giữa Kì</th>
                            <th>% Cuối Kì</th>
                            <th>Bài Tập</th>
                            <th>Kiểm Tra</th>
                            <th>Thi</th>
                            <th>TK1(10)</th>
                            <th>TK(10)</th>
                            <th>TK1(CH)</th>
                            <th>TK(CH)</th>
                        </tr>
                        <tr bgcolor='#C8C8C8'>
                            <td colspan='14'>Học kỳ 1 - Năm học 2019-2020</td>
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>1</td>
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
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>2</td>
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
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>3</td>
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
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>4</td>
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
                            <td></td>
                            <td></td>
                        </tr>
                        <tr bgcolor='#C8C8C8'>
                            <td colspan='14'>Học kỳ 2 - Năm học 2019-2020</td>
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>1</td>
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
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>2</td>
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
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>3</td>
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
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>3</td>
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
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan='7'>Điểm trung bình học kỳ hệ 10/100:</td>
                            <td colSpan='7'><p>85</p></td>
                        </tr>
                        <tr>
                            <td colSpan='7'>Điểm trung bình học kỳ hệ 4:</td>
                            <td colSpan='7'><p>3.5</p></td>
                        </tr>
                        <tr>
                            <td colSpan='7'>Điểm trung bình tích lũy:</td>
                            <td colSpan='7'><p>86.7</p></td>
                        </tr>
                        <tr>
                            <td colSpan='7'>Điểm trung bình tích lũy (hệ 4):</td>
                            <td colSpan='7'><p>3.66</p></td>
                        </tr>
                        <tr>
                            <td colSpan='7'>Số tín chỉ đạt:</td>
                            <td colSpan='7'><p>24</p></td>
                        </tr>
                        <tr>
                            <td colSpan='7'>Số tín chỉ tích lũy:</td>
                            <td colSpan='7'><p>139</p></td>
                        </tr>
                        <tr>
                            <td colSpan='7'>Phân loại điểm trung bình học kì:</td>
                            <td colSpan='7'><p>Giỏi</p></td>
                        </tr>
                    </table>
                </div>
            </div>
            </>
        )
    }
}

export default Score