import './EduProgram.scss';
import React from 'react'

class Prerequisite extends React.Component {
    render() {
        return(
            <>
            <div className="wrapper-finalexam">
                <div className='chosen-radio'>
                    <div className='subject'>
                        <input type="radio" name="prerequisite-sub"/>
                        <label for="html">Môn yêu cầu tiên quyết</label>
                        <input type="radio" name="prerequisite-sub"/>
                        <label for="html">Môn yêu cầu tiên quyết</label>
                        <input type="radio" name="prerequisite-sub"/>
                        <label for="html">Môn yêu cầu tiên quyết</label>
                    </div>
                    <div className='Major'>
                        <label for='major'>Ngành: </label>
                        <select id='major'>
                            <option>Information Technology</option>
                        </select>
                    </div>
                </div>
                <div className='info-schedule'>
                    <table>
                        <tr bgcolor='#B0E0E6'>
                            <th>STT</th>
                            <th>Mã Môn Học</th>
                            <th>Tên Môn Học</th>
                            <th>Số Tín Chỉ</th>
                            <th>Số Tín Chỉ Học Phần</th>
                            <th>Năm</th>
                            <th>Học Kỳ</th>
                            <th>BB Tự Chọn</th>
                            <th>Đã Học</th>
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
                        </tr>
                        <tr>
                            <td bgcolor='#B0E0E6'>5</td>
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
                            <td bgcolor='#B0E0E6'>6</td>
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
                            <td bgcolor='#B0E0E6'>7</td>
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
                            <td bgcolor='#B0E0E6'>8</td>
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

export default Prerequisite