import { useState } from "react";
import chefData from "../../data/chef.json";
import "./css/NewRaidChoiseSelect.css";
import ButtonBlue from "../Button/ButtonBlue";

// Interface mise à jour pour correspondre à la structure réelle des données
interface Chef {
  id: number;
  name: string;
  weapon: string;
  speciality: string;
  army: number;
  army_price: number;
  price: number;
}

interface NewRaidOptionChefProps {
  itemChoice: string;
  setChoiceType: string;
}

const NewRaidOptionChef = ({
  itemChoice,
  setChoiceType,
}: NewRaidOptionChefProps) => {
  const [selectedChef, setSelectedChef] = useState<number | null>(null);
  const [openChef, setOpenChef] = useState<number | null>(null);

  const toggleChef = (id: number) => {
    setOpenChef(openChef === id ? null : id);
  };

  const selectChef = (chef: Chef) => {
    setSelectedChef(chef.id);
    const currentRaid = JSON.parse(localStorage.getItem("currentRaid") || "{}");
    localStorage.setItem(
      "currentRaid",
      JSON.stringify({
        ...currentRaid,
        selectedChef: chef.id,
        chefDetails: chef,
      }),
    );
  };

  return (
    <div className="newRaid-options-main">
      <h1>Choisissez {itemChoice} :</h1>
      {setChoiceType === "chef" &&
        chefData.map((chef: Chef) => (
          <button
            key={chef.id}
            type="button"
            onClick={() => toggleChef(chef.id)}
            className={`options-container${
              selectedChef === chef.id ? "-selected" : ""
            }${openChef === chef.id ? "-open" : ""}`}
          >
            <h2>{chef.name}</h2>
            <h2>Prix : {chef.price}</h2>
            {openChef === chef.id && (
              <>
                <h2>Specialité : {chef.speciality}</h2>
                <h2>Nombre de soldats : {chef.army}</h2>
                <h2>Cout avec soldats : {chef.army_price}</h2>
                <div className="select-button-position">
                  <ButtonBlue
                    texte="Sélectionner"
                    link=""
                    onClick={() => selectChef(chef)}
                  />
                </div>
              </>
            )}
          </button>
        ))}
    </div>
  );
};

export default NewRaidOptionChef;
