import { useState } from "react";
import assurances from "../../data/assurances.json";
import "./css/NewRaidChoiseSelect.css";
import ButtonBlue from "../Button/ButtonBlue";

interface Assurance {
  id: number;
  name: string;
  cost: number;
}

interface NewRaidOptionAssurancesProps {
  itemChoice: string;
  setChoiceType: string;
}

const NewRaidOptionAssurances = ({
  itemChoice,
  setChoiceType,
}: NewRaidOptionAssurancesProps) => {
  const [selectedAssurance, setSelectedAssurance] = useState<number | null>(
    null,
  );
  const [openAssurance, setOpenAssurance] = useState<number | null>(null);

  const toggleAssurance = (id: number) => {
    setOpenAssurance(openAssurance === id ? null : id);
  };

  const selectAssurance = (assurance: Assurance) => {
    setSelectedAssurance(assurance.id);
    const currentRaid = JSON.parse(localStorage.getItem("currentRaid") || "{}");
    localStorage.setItem(
      "currentRaid",
      JSON.stringify({
        ...currentRaid,
        selectedAssurance: assurance.id,
        assuranceDetails: assurance,
      }),
    );
  };

  return (
    <div className="newRaid-options-main">
      <h1>Choisissez {itemChoice} :</h1>
      {setChoiceType === "assurances" &&
        assurances.map((assurance: Assurance) => (
          <button
            key={assurance.id}
            type="button"
            onClick={() => toggleAssurance(assurance.id)}
            className={`options-container${
              selectedAssurance === assurance.id ? "-selected" : ""
            }${openAssurance === assurance.id ? "-open" : ""}`}
          >
            <h2>Assurance : {assurance.name}</h2>
            <h2>Prix : {assurance.cost}</h2>
            {openAssurance === assurance.id && (
              <div className="select-button-position">
                <ButtonBlue
                  texte="Sélectionner"
                  link=""
                  onClick={() => selectAssurance(assurance)}
                />
              </div>
            )}
          </button>
        ))}
    </div>
  );
};

export default NewRaidOptionAssurances;
