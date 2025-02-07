import "./css/NewRaidChoiceContainer.css";
import NewRaidOptionSelector from "./NewRaidChoiseSelect";

function NewRaidOptionContainer() {
  return (
    <div className="choice-section-container">
      <NewRaidOptionSelector
        itemChoice="votre terrain"
        setChoiceType="terrain"
      />
      <NewRaidOptionSelector
        itemChoice="votre chef de guerre"
        setChoiceType="chef"
      />
      <NewRaidOptionSelector itemChoice="vos navire" setChoiceType="navire" />
      <NewRaidOptionSelector
        itemChoice="l’equipement de vos troupes"
        setChoiceType="weapon"
      />
    </div>
  );
}

export default NewRaidOptionContainer;
