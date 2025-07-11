import "./Footer.scss";
import logoFooter from "../assets/LOGO_footer.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logoFooter} alt="Kasa" />
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
