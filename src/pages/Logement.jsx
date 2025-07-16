import {useState, useEffect} from "react";
import {useParams, Navigate} from "react-router-dom";
import Layout from "../components/layouts/Layout";
import logementsData from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import "./Logement.scss";
import Collapse from "../components/Collapse";
import Star from "../components/Icons/Star";
import Tags from "../components/Tags";
import Host from "../components/Host";

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
              <Tags tags={logement.tags} />
            </div>
            <div className="logement-info-right">
              <Host name={logement.host.name} picture={logement.host.picture} />
              <div className="rating">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} filled={i < Number(logement.rating)} />
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
