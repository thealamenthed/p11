import {useState, useEffect} from "react";
import {useParams, Navigate} from "react-router-dom";
import Layout from "../components/Layout";
import logementsData from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import "./Logement.scss";
import Collapse from "../components/Collapse";

function Logement() {
  const {id} = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundLogement = logementsData.find((l) => l.id === id);
    setLogement(foundLogement);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!logement) {
    return <Navigate to="/error" replace />;
  }

  return (
    <Layout>
      <div className="logement-detail">
        <div className="logement-images">
          <Slideshow images={logement.pictures} />
        </div>

        <div className="logement-info">
          <div className="logement-info-row">
            <div className="logement-info-left">
              <h1 className="logement-title">{logement.title}</h1>
              <p className="location">{logement.location}</p>
              <div className="tags">
                {logement.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="logement-info-right">
              <div className="host">
                <span className="host-name">
                  {logement.host.name.split(" ").map((part, i) => (
                    <span key={i}>
                      {part}
                      <br />
                    </span>
                  ))}
                </span>
                <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
              </div>
              <div className="rating">
                {/* Affichage des étoiles à la place du texte */}
                {Array.from({length: 5}).map((_, i) => (
                  <span key={i} className={i < Number(logement.rating) ? "star filled" : "star"}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="logement-details-bottom">
          <div className="description">
            <Collapse title="Description">
              <p>{logement.description}</p>
            </Collapse>
          </div>

          <div className="equipments">
            <Collapse title="Équipements">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Logement;
