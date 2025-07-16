import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";

function Layout({children}) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
