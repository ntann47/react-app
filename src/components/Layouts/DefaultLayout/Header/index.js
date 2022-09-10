import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header">
      <div className="container header-container">
        <div className="header-left">
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
        <div className="header-right">
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
