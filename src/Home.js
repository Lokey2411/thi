import { Link } from "react-router-dom";
import './Home.css';
import './Main.css';
import './themify-icons/themify-icons.css'

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-top line">
            <img src="logo.jpg" alt=""/>
            <div className="right">
                <ul className="line background-main">
                    <li className="padding-10">Tài nguyên số</li>
                    <li className="padding-10">Học liệu số</li>
                    <li className="padding-10">Thư viện</li>
                    <li className="padding-10">Văn bản</li>
                    <li className="padding-10"><Link to="/contact"> E-mail</Link></li>
                    <li className="padding-10">Liên hệ</li>
                    <li className="padding-10">Sitemap</li>

                </ul>
                <p className="right text-main">English
                    <br/>
                    <input type="text" placeholder="Nhập thông tin cần tìm: tuyển sinh, đào tạo..." className="padding-10"/>
                    <button className="background-main padding-10">Tìm kiếm</button>
                </p>
            </div>
        </div>
        <ul className="main-navbar line">
            <li className="upper padding-10">Trang chủ</li>
            <li className="upper padding-10">Giới thiệu</li>
            <li className="upper padding-10">Đào tạo</li>
            <li className="upper padding-10">Khoa học-Công nghệ</li>
            <li className="upper padding-10">Hợp tác & Phát triển</li>
            <li className="upper padding-10">Sinh viên</li>
            <li className="upper padding-10">Đăng ký học bổng</li>
            <li className="upper padding-10">Cán bộ</li>
            <li className="upper padding-10">Tuyển dụng</li>
        </ul>
    </div>
    <div className="content line">
        <img src="background.PNG" alt=""/>
        <img src="right-side.PNG" alt=""/>
    </div>
    <div className="footer">
        <ul className="line">
            <li className="upper red-text">Kênh hỗ trợ tiểu học</li>
            <li className="upper">Cơ sở hoà Lạc</li>
            <li className="upper">Bản tin ĐHQGHN</li>
            <li className="upper">Tạp chí khoa học</li>
            <li className="width-40p upper">Đảm bảo chất lượng</li>
        </ul>
    </div>
    </div>
  );
};

export default Home;
