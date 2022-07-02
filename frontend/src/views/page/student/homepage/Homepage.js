import './Homepage.scss';
import geninfo from '../../../../assets/images/gen-info.jpg'
import regiscourse from '../../../../assets/images/regis-course.jpg'
import graduation from '../../../../assets/images/graduation-img.jpg'
import examor from '../../../../assets/images/exam-or-img.jpg'
import hocbong from '../../../../assets/images/hocbong-img.jpg'

import React from 'react'

class Homepage extends React.Component {
  render() {
    return (
        <div className='wrapper-homepage'>
            <div className='general-info'>
                <table>
                    <tr>
                        <th>THÔNG TIN CHUNG</th>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ VIỆC HỦY/MỞ NHÓM MÔN HỌC SAU ĐĂNG KÝ MÔN HỌC, HỌC KỲ III - NĂM HỌC 2021 - 2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ KHẢO SÁT TRỰC TUYẾN ĐÁNH GIÁ MÔN HỌC HỌC KỲ 2, NĂM HỌC 2021-2022.
                             ANNOUNCEMENT FOR ONLINE COURSE EVALUATION SEMESTER 2,  ACADEMIC YEAR 2021-2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>VỀ QUY TRÌNH CHUYỂN NGÀNH, CHUYỂN CHƯƠNG TRÌNH CHO NĂM HỌC 2022 – 2023</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO MỨC THU HỌC PHÍ VÀ TỈ GIÁ HỌC KỲ III, NĂM HỌC 2021 - 2022</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                </table>
            </div>
            <div className='general-info-img'>
                <img src={geninfo} alt='general-info-img' />
            </div>

            <div className='general-info'>
                <img src={regiscourse} alt='regiscourse-img' />
            </div>
            <div className='general-info-img'>
            <table>
                    <tr>
                        <th>ĐĂNG KÝ MÔN & THỜI KHÓA BIỂU</th>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ VIỆC HỦY/MỞ NHÓM MÔN HỌC SAU ĐĂNG KÝ MÔN HỌC, HỌC KỲ III - NĂM HỌC 2021 - 2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ KHẢO SÁT TRỰC TUYẾN ĐÁNH GIÁ MÔN HỌC HỌC KỲ 2, NĂM HỌC 2021-2022.
                             ANNOUNCEMENT FOR ONLINE COURSE EVALUATION SEMESTER 2,  ACADEMIC YEAR 2021-2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>VỀ QUY TRÌNH CHUYỂN NGÀNH, CHUYỂN CHƯƠNG TRÌNH CHO NĂM HỌC 2022 – 2023</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO MỨC THU HỌC PHÍ VÀ TỈ GIÁ HỌC KỲ III, NĂM HỌC 2021 - 2022</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                </table>
            </div>

            <div className='general-info'>
                 <table>
                    <tr>
                        <th>TỐT NGHIỆP</th>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ VIỆC HỦY/MỞ NHÓM MÔN HỌC SAU ĐĂNG KÝ MÔN HỌC, HỌC KỲ III - NĂM HỌC 2021 - 2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ KHẢO SÁT TRỰC TUYẾN ĐÁNH GIÁ MÔN HỌC HỌC KỲ 2, NĂM HỌC 2021-2022.
                             ANNOUNCEMENT FOR ONLINE COURSE EVALUATION SEMESTER 2,  ACADEMIC YEAR 2021-2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>VỀ QUY TRÌNH CHUYỂN NGÀNH, CHUYỂN CHƯƠNG TRÌNH CHO NĂM HỌC 2022 – 2023</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO MỨC THU HỌC PHÍ VÀ TỈ GIÁ HỌC KỲ III, NĂM HỌC 2021 - 2022</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                </table>
            </div>
            <div className='general-info-img'>
                <img src={graduation} alt='regiscourse-img' />
            </div>

            <div className='general-info'>
                <img src={examor} alt='general-info-img' />
            </div>
            <div className='general-info-img'>
                 <table>
                    <tr>
                        <th>TỔ CHỨC THI</th>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ VIỆC HỦY/MỞ NHÓM MÔN HỌC SAU ĐĂNG KÝ MÔN HỌC, HỌC KỲ III - NĂM HỌC 2021 - 2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ KHẢO SÁT TRỰC TUYẾN ĐÁNH GIÁ MÔN HỌC HỌC KỲ 2, NĂM HỌC 2021-2022.
                             ANNOUNCEMENT FOR ONLINE COURSE EVALUATION SEMESTER 2,  ACADEMIC YEAR 2021-2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>VỀ QUY TRÌNH CHUYỂN NGÀNH, CHUYỂN CHƯƠNG TRÌNH CHO NĂM HỌC 2022 – 2023</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO MỨC THU HỌC PHÍ VÀ TỈ GIÁ HỌC KỲ III, NĂM HỌC 2021 - 2022</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                </table>
            </div>

            <div className='general-info'>
                 <table>
                    <tr>
                        <th>HỌC BỔNG & HỌC VỤ</th>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ VIỆC HỦY/MỞ NHÓM MÔN HỌC SAU ĐĂNG KÝ MÔN HỌC, HỌC KỲ III - NĂM HỌC 2021 - 2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO VỀ KHẢO SÁT TRỰC TUYẾN ĐÁNH GIÁ MÔN HỌC HỌC KỲ 2, NĂM HỌC 2021-2022.
                             ANNOUNCEMENT FOR ONLINE COURSE EVALUATION SEMESTER 2,  ACADEMIC YEAR 2021-2022</a></td>
                        <p>(06/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>VỀ QUY TRÌNH CHUYỂN NGÀNH, CHUYỂN CHƯƠNG TRÌNH CHO NĂM HỌC 2022 – 2023</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                    <tr>
                        <td><a href='http://localhost:3000/#contact'>THÔNG BÁO MỨC THU HỌC PHÍ VÀ TỈ GIÁ HỌC KỲ III, NĂM HỌC 2021 - 2022</a></td>
                        <p>(03/06/2022)</p>
                    </tr>
                </table>
            </div>
            <div className='general-info-img'>
                <img src={hocbong} alt='general-info-img' /> 
            </div>
        </div>

      );
  }
}

export default Homepage;
