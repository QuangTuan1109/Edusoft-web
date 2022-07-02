import './Timetable.scss';
import React from 'react'

class Timetable extends React.Component {
    render() {
        return(
            <>
            <div className='title'>
                <span>THỜI KHÓA BIỂU</span>
            </div>
            <div className="wrapper">
                <div className='info-timetable'>
                   <div>
                        <lablel for='sem'>Chọn Học Kỳ Xem Thời Khóa Biểu</lablel>
                        <select name='sem'>
                            <option>Học kì 1 - Năm học 2021-2022</option>
                            <option>Học kì 1 - Năm học 2021-2022</option>
                            <option>Học kì 1 - Năm học 2021-2022</option>
                            <option>Học kì 1 - Năm học 2021-2022</option>
                        </select>
                        <button type='button'>In TKB</button>
                   </div>

                    <div>
                        <select name='week-or-sem'>
                            <option>Thời khóa biểu theo tuần</option>
                            <option>Thời khóa biểu theo học kì cá nhân</option>
                        </select>

                        <select name='week'>
                            <option>Tuần 1 [Từ 13/06/2022 -- Đến 20/06/2022]</option>
                            <option>Tuần 1 [Từ 21/06/2022 -- Đến 27/06/2022]</option>
                        </select>
                    </div>
                </div>
                <div className='info-schedule'>
                    <table>
                        <tr>
                            <th>Tiết/Thứ</th>
                            <th>Thứ Hai</th>
                            <th>Thứ Ba</th>
                            <th>Thứ Tư</th>
                            <th>Thứ Năm</th>
                            <th>Thứ Sáu</th>
                            <th>Thứ Bảy</th>
                            <th>Chủ Nhật</th>
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                            <td>Tiết 1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tiết 2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tiết 3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tiết 4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tiết 5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>   
                        </tr>
                        <tr>
                            <td>Tiết 6</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tiết 7</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tiết 8</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tiết 9</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tiết 10</td>
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
                
                <div className='button-move'>
                    <button type='button'>Tuần đầu</button>
                    <button type='button'>Tuần trước</button>
                    <button type='button'>Tuần kế</button>
                    <button type='button'>Tuần cuối</button>
                </div>
                <div className='note'>
                    <p>( Lưu ý: tuần 44 tương ứng với tuần 1 của học kỳ, bắt đầu từ ngày 27/06/2022) Sinh viên phải hoàn thành học phí HKII năm học 2021-2022 trước ngày 23/03/2022.
                        Các sinh viên có học bổng bán phần phải hoàn thành 50% học phí học kỳ 2 năm học 2021-2022</p>
                    <div className='note-color'>
                        <div id='square-specialize'></div>
                        <p>Môn Chuyên Ngành</p>
                        <div id='square-general'></div>
                        <p>Môn Đại Cương</p>
                        <div id='square-political'></div>
                        <p>Môn Chính Trị</p>
                        <div id='square-sport'></div>
                        <p>Môn Thể Chất</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Timetable