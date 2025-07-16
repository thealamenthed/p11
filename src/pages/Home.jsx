import {useState, useEffect} from "react";
import Layout from "../components/layouts/Layout";
import LogementCard from "../components/LogementCard";
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
            <LogementCard key={logement.id} logement={logement} />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default Home;
