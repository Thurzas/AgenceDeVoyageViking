import { useState } from "react";
import "./css/NewRaidChoiceContainer.css";
import NewRaidOptionChef from "./NewRaidChoiseChef";
import NewRaidOptionCountry from "./NewRaidChoiseCountry";
import NewRaidOptionShip from "./NewRaidChoiseShip";
import NewRaidOptionWeapon from "./NewRaidChoiseWeapon";

function NewRaidOptionContainer() {
  const [isActiv, setIsActiv] = useState(false);

  return (
    <div className="choice-section-container">
      <NewRaidOptionCountry
        itemChoice="terrain"
        isActiv={isActiv}
        handleClick={() => setIsActiv(!isActiv)}
      />
      <NewRaidOptionChef
        setChoiceType="chef"
        itemChoice="votre chef de guerre"
      />
      <NewRaidOptionShip setChoiceType="navire" itemChoice="vos navire" />
      <NewRaidOptionWeapon
        itemChoice="l’equipement de vos troupes"
        setChoiceType="weapon"
      />
    </div>
  );
}

export default NewRaidOptionContainer;
