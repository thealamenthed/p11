import {Link} from "react-router-dom";

const LogementCard = ({logement}) => {
  return (
    <Link to={`/logement/${logement.id}`} className="logement-card">
      <div className="logement-image">
        <img src={logement.cover} alt={logement.title} />
      </div>
      <h3 className="logement-title">{logement.title}</h3>
    </Link>
  );
};

export default LogementCard;
