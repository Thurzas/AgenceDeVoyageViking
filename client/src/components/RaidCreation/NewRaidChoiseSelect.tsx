import { useEffect, useState } from "react";
import assurances from "../../data/assurances.json";
import chefData from "../../data/chef.json";
import shipData from "../../data/ship.json";
import terrainDataRaw from "../../data/terrain.json";
import weapons from "../../data/weapons.json";
import "./css/NewRaidChoiseSelect.css";

interface Terrain {
  id: string;
  name: string;
  difficulty: string;
}

interface RaidData {
  [key: string]: Terrain[]; // ✅ Permet un accès dynamique aux données
}

const terrainData: RaidData = terrainDataRaw;

const NewRaidOptionSelector = ({
  itemChoice,
  setChoiceType,
}: { itemChoice: string; setChoiceType: string }) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    const raidData = localStorage.getItem("currentRaid");
    if (raidData) {
      const currentRaid = JSON.parse(raidData);
      setSelectedCountry(currentRaid.selectedCountry.toLowerCase()); // Convertir en minuscules
    }
  }, []);

  if (!selectedCountry) {
    return <h2>Chargement...</h2>;
  }

  return (
    <div className="newRaid-options-main">
      <h1>Choisissez {itemChoice} :</h1>

      {setChoiceType === "terrain" &&
        terrainData[selectedCountry] &&
        terrainData[selectedCountry].map((terrain: Terrain) => (
          <div key={terrain.id} className="options-container">
            <h2>{terrain.name}</h2>
            <h2>Difficulté : {terrain.difficulty}</h2>
          </div>
        ))}

      {setChoiceType === "chef" &&
        chefData &&
        chefData.map((chef) => (
          <div key={chef.id} className="options-container">
            <h2>{chef.name}</h2>
            <h2>price : {chef.price}</h2>
          </div>
        ))}

      {setChoiceType === "navire" &&
        shipData &&
        shipData.map((ship) => (
          <div key={ship.id} className="options-container">
            <h2>{ship.name}</h2>
            <h2>price : {ship.cost}</h2>
          </div>
        ))}

      {setChoiceType === "weapon" &&
        weapons &&
        weapons.map((weapon) => (
          <div key={weapon.id} className="options-container">
            <h2>{weapon.material}</h2>
            <h2>price : {weapon.cost_per_soldier}</h2>
          </div>
        ))}

      {setChoiceType === "assurances" &&
        assurances &&
        assurances.map((assurance) => (
          <div key={assurance.id} className="options-container">
            <h2>{assurance.material}</h2>
            <h2>price : {assurance.cost_per_soldier}</h2>
          </div>
        ))}
    </div>
  );
};

export default NewRaidOptionSelector;
