import Question from "../components/Question";

function Fern() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'une :"
          Titre="BALADE EN FORÊT"
          imgSource="/foret.png"
          nextPage="/flowery"
        />
      </div>
    </>
  );
}

export default Fern;
