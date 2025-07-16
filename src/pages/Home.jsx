import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Layout from "../components/layout/Layout";
import logementsData from "../data/logements.json";
import "./Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  return (
    <Layout>
      <div className="home">
        <section className="hero">
          <h1 className="hero-title-desktop">Chez vous, partout et ailleurs</h1>
          <h1 className="hero-title-mobile">
            Chez vous,
            <br />
            <span className="hero-sub">partout et ailleurs</span>
          </h1>
        </section>

        <section className="logements-grid">
          {logements.map((logement) => (
            <Link key={logement.id} to={`/logement/${logement.id}`} className="logement-card">
              <div className="logement-image">
                <img src={logement.cover} alt={logement.title} />
              </div>
              <h3 className="logement-title">{logement.title}</h3>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default Home;
