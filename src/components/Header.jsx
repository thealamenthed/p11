import {Link} from "react-router-dom";
import "./Header.scss";
import logoNav from "../assets/LOGO_nav.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logoNav} alt="Kasa" />
        </Link>
        <nav className="navigation">
          <Link to="/" className="nav-link">
            Accueil
          </Link>
          <Link to="/about" className="nav-link">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
