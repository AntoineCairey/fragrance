/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./gender.css";
import { useNavigate, useOutletContext } from "react-router-dom";

function Gender() {
  const navigate = useNavigate();
  const { setGenre } = useOutletContext();

  const handleClick = (sexe) => {
    setGenre(sexe);
    navigate("/fern");
  };

  return (
    <div className="container-gender">
      <img src="./fragrance2.png" alt="logo" className="logo-second" />
      <h1 className="question-gender">QUEL EST VOTRE GENRE ?</h1>
      <div className="flex-gender">
        <img
          onClick={() => handleClick("Femme")}
          className="img-woman"
          src="/femme.png"
          alt=""
        />
        <img
          onClick={() => handleClick("Homme")}
          className="img-man"
          src="/homme.png"
          alt=""
        />
        <button
          aria-label="neutre"
          className="text-neutre"
          type="button"
          onClick={() => handleClick("Neutre")}
        >
          NEUTRE
        </button>
      </div>
      <div className="footer-gender"></div>
    </div>
  );
}

export default Gender;
