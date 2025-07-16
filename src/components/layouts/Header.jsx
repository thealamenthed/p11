import {NavLink} from "react-router-dom";
import "./Header.scss";
import logoNav from "../../assets/logos/LOGO_nav.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img src={logoNav} alt="Kasa" />
        </NavLink>
        <nav className="navigation">
          <NavLink to="/" className={({isActive}) => "nav-link" + (isActive ? " active" : "")} end>
            Accueil
          </NavLink>
          <NavLink to="/about" className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
