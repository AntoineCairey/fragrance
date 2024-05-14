import Question from "../components/Question";

function Flowery() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'un :"
          Titre="BOUQUET DE ROSES"
          imgSource="/rose.png"
          nextPage="/fruity"
        />
      </div>
    </>
  );
}

export default Flowery;
