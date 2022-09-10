import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header">
      <div className="container header-container">
        <div className="col-6 header-left">
          <div className="header-logo"></div>
          <div className="header-nav">
            <ul>
              <li>Điện Thoại</li>
              <li>Laptop</li>
              <li>Phụ Kiện</li>
              <li>Khám Phá</li>
              <li>Khuyến Mãi</li>
            </ul>
          </div>
        </div>
        <div className="col-6 header-right">
          <div className="header-actions">
            <ul>
              <li>Trợ Giúp</li>
              <li>Đăng Nhập</li>
            </ul>
          </div>
          <div className="header-search">
            <span className="search-text">Search</span>
            <span className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
