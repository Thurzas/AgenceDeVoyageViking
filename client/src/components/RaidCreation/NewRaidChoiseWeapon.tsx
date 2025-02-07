import { useState } from "react";
import weapons from "../../data/weapons.json";
import "./css/NewRaidChoiseSelect.css";
import ButtonBlue from "../Button/ButtonBlue";

interface Weapon {
  id: number;
  material: string;
  rank: number;
  cost_per_soldier: number;
  durability: string;
  lightness: string;
}

interface NewRaidOptionWeaponProps {
  itemChoice: string;
  setChoiceType: string;
}

const NewRaidOptionWeapon = ({
  itemChoice,
  setChoiceType,
}: NewRaidOptionWeaponProps) => {
  const [selectedWeapon, setSelectedWeapon] = useState<number | null>(null);
  const [openWeapon, setOpenWeapon] = useState<number | null>(null);

  const toggleWeapon = (id: number) => {
    setOpenWeapon(openWeapon === id ? null : id);
  };

  const selectWeapon = (weapon: Weapon) => {
    setSelectedWeapon(weapon.id);
    const currentRaid = JSON.parse(localStorage.getItem("currentRaid") || "{}");
    localStorage.setItem(
      "currentRaid",
      JSON.stringify({
        ...currentRaid,
        selectedWeapon: weapon.id,
        weaponDetails: weapon,
      }),
    );
  };

  return (
    <div className="newRaid-options-main">
      <h1>Choisissez {itemChoice} :</h1>
      {setChoiceType === "weapon" &&
        weapons.map((weapon: Weapon) => (
          <button
            key={weapon.id}
            type="button"
            onClick={() => toggleWeapon(weapon.id)}
            className={`options-container${
              selectedWeapon === weapon.id ? "-selected" : ""
            }${openWeapon === weapon.id ? "-open" : ""}`}
          >
            <h2>Materiaux : {weapon.material}</h2>
            <h2>Cout par troupe : {weapon.cost_per_soldier}</h2>
            {openWeapon === weapon.id && (
              <>
                <h2>Durabilité : {weapon.durability}</h2>
                <h2>Légèreté : {weapon.lightness}</h2>
                <div className="select-button-position">
                  <ButtonBlue
                    texte="Sélectionner"
                    link=""
                    onClick={() => selectWeapon(weapon)}
                  />
                </div>
              </>
            )}
          </button>
        ))}
    </div>
  );
};

export default NewRaidOptionWeapon;
