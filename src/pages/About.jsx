import Layout from "../components/Layout";
// import "./About.scss";

function About() {
  return (
    <Layout>
      <div className="about">
        <div className="about-content">
          <h1>À propos de Kasa</h1>
          <p>
            Kasa est une plateforme de location d'appartements entre particuliers. Nous mettons en relation les voyageurs avec des hôtes accueillants
            pour des séjours uniques et authentiques.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
