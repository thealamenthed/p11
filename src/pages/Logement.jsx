import {useState, useEffect} from "react";
import {useParams, Navigate} from "react-router-dom";
import Layout from "../components/Layout";
import logementsData from "../data/logements.json";
// import "./Logement.scss";

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
          <img src={logement.cover} alt={logement.title} />
        </div>

        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="rating">
            <span>Note: {logement.rating}/5</span>
          </div>

          <div className="host">
            <img src={logement.host.picture} alt={logement.host.name} />
            <span>{logement.host.name}</span>
          </div>
        </div>

        <div className="description">
          <h2>Description</h2>
          <p>{logement.description}</p>
        </div>

        <div className="equipments">
          <h2>Équipements</h2>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Logement;
