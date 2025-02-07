import { useState } from "react";
import shipData from "../../data/ship.json";
import "./css/NewRaidChoiseSelect.css";
import ButtonBlue from "../Button/ButtonBlue";

interface Ship {
  id: number;
  name: string;
  power: string;
  size: string;
  speed: string;
  cost: number;
  capacity: number;
  durability: string;
  description: string;
}

interface NewRaidOptionShipProps {
  itemChoice: string;
  setChoiceType: string;
}

const NewRaidOptionShip = ({
  itemChoice,
  setChoiceType,
}: NewRaidOptionShipProps) => {
  const [selectedShip, setSelectedShip] = useState<number | null>(null);
  const [openShip, setOpenShip] = useState<number | null>(null);

  const toggleShip = (id: number) => {
    setOpenShip(openShip === id ? null : id);
  };

  const selectShip = (ship: Ship) => {
    setSelectedShip(ship.id);
    const currentRaid = JSON.parse(localStorage.getItem("currentRaid") || "{}");
    localStorage.setItem(
      "currentRaid",
      JSON.stringify({
        ...currentRaid,
        selectedShip: ship.id,
        shipDetails: ship,
      }),
    );
  };

  return (
    <div className="newRaid-options-main">
      <h1>Choisissez {itemChoice} :</h1>
      {setChoiceType === "navire" &&
        shipData.map((ship: Ship) => (
          <button
            key={ship.id}
            type="button"
            onClick={() => toggleShip(ship.id)}
            className={`options-container${
              selectedShip === ship.id ? "-selected" : ""
            }${openShip === ship.id ? "-open" : ""}`}
          >
            <h2>{ship.name}</h2>
            <h2>Prix : {ship.cost}</h2>
            {openShip === ship.id && (
              <>
                <h2>Puissance : {ship.power}</h2>
                <h2>Taille : {ship.size}</h2>
                <h2>Vitesse : {ship.speed}</h2>
                <h2>Capacité : {ship.capacity} personnes</h2>
                <h2>Durabilité : {ship.durability}</h2>
                <h2>{ship.description}</h2>
                <div className="select-button-position">
                  <ButtonBlue
                    texte="Sélectionner"
                    link=""
                    onClick={() => selectShip(ship)}
                  />
                </div>
              </>
            )}
          </button>
        ))}
    </div>
  );
};

export default NewRaidOptionShip;
