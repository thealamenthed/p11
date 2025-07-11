import {Link} from "react-router-dom";
import Layout from "../components/Layout";
// import "./Error.scss";

function Error() {
  return (
    <Layout>
      <div className="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous recherchez n'existe pas.</p>
        <Link to="/" className="back-home">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </Layout>
  );
}

export default Error;
