import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <img className="rubis" src="/rubis.png" alt="" />
      <img className="mer" src="/mer.png" alt="" />
      <img className="montagne" src="/montagne.png" alt="" />
      <img className="cactus" src="/cactus.png" alt="" />
      <img className="fleur" src="/fleur.png" alt="" />
      <div className="logo-fragrance">
        <img src="/fragrance.png" alt="Logo fragrance" />
      </div>
      <div className="title">
        <h1>VOTRE PARFUM DE RÊVE SE TROUVE CHEZ L'ORÉAL</h1>
      </div>
      <Link to="/gender">
        <div className="btn">
          <button className="btn-home" type="button">
            TROUVER MON PARFUM →
          </button>
        </div>
      </Link>
      <div className="text-content">
        <p>
          Découvrez votre parfum idéal avec Fragrance by L'Oréal . Répondez à
          quelques questions rapides, explorez des suggestions personnalisées de
          parfums haut de gamme et plongez dans une expérience unique.
          Laissez-vous guider vers une signature olfactive qui reflète votre
          style et votre personnalité.
        </p>
      </div>
      ;
    </>
  );
}

export default Home;
