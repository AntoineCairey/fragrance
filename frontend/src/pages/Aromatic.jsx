import Question from "../components/Question";

function Aromatic() {
  return (
    <>
      <div>
        <Question
          title="Au quotidien, vous aimez l'odeur d'un :"
          Titre="CHAMPS DE LAVANDE"
          imgSource="/lavande.png"
          nextPage="/citrus"
        />
      </div>
    </>
  );
}

export default Aromatic;
