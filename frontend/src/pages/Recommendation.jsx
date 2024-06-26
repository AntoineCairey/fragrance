import axios from "axios";
import "./recommendation.css";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reco from "../components/Reco";

function Recommendation() {
  const { genre, prefs } = useOutletContext();
  const body = { genre, prefs };
  const [getReco, setGetReco] = useState([]);
  useEffect(() => {
    const getRecoUser = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/recos`,
          body
        );
        setGetReco(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getRecoUser();
  }, []);

  return (
    <div>
      <Header />
      <div className="recommendation">
        <h1 className="selection">Votre sélection de parfum</h1>
        {getReco.map((reco) => (
          <Reco
            key={reco.id}
            id={reco.id}
            nom={reco.nom}
            marque={reco.marque}
            prix={reco.prix}
            image={reco.image}
            pourcent={reco.pourcent}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
