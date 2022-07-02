import React from 'react'

class Bill extends React.Component {
    render() {
        return(
            <>
            <div className="wrapper">
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
                        <tr>
                            <th>STT</th>
                            <th>Mã Môn Học</th>
                            <th>Tên Môn Học</th>
                            <th>Nhóm Môn Học</th>
                            <th>TTH</th>
                            <th>Số Tín Chỉ</th>
                            <th>Số Tín Chỉ Học Phần</th>
                            <th>Học Phí</th>
                            <th>Miễn Giảm</th>
                            <th>Phải Đóng</th>
                            <th>Trạng Thái</th>
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
                        </tr>
                        <tr>
                            <td colspan="5">Tổng Cộng</td>
                            <td></td>
                            <td></td>
                            <td colspan="4"></td>
                        </tr>
                    </table>
                </div>
            </div>
            </>
        )
    }
}

export default Bill