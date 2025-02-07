import { useEffect, useState } from "react";
import terrains from "../../data/terrain.json";
import "./css/NewRaidChoiseSelect.css";
import ButtonBlue from "../Button/ButtonBlue";

interface Terrain {
  id: string;
  name: string;
  difficulty: string;
  description: string;
  reward: string;
}

interface TerrainData {
  [key: string]: Terrain[]; // Déclare un type indexé pour terrains.json
}

const terrainsData: TerrainData = terrains; // Cast explicite du JSON

interface NewRaidOptionSelectorProps {
  itemChoice: string;
  isActiv: boolean;
  handleClick: () => void;
}

const NewRaidOptionCountry = ({ itemChoice }: NewRaidOptionSelectorProps) => {
  const [selectedCountry, setSelectedCountry] = useState<
    keyof TerrainData | ""
  >("");
  const [openTerrain, setOpenTerrain] = useState<string | null>(null);
  const [selectedTerrain, setSelectedTerrain] = useState<string | null>(null);

  useEffect(() => {
    const raidData = localStorage.getItem("currentRaid");
    if (raidData) {
      try {
        const currentRaid = JSON.parse(raidData);
        const country: string = currentRaid.selectedCountry?.toLowerCase();

        if (country in terrainsData) {
          setSelectedCountry(country as keyof TerrainData);
        }
      } catch (error) {
        console.error("Erreur lors du parsing du raidData :", error);
      }
    }
  }, []);

  const terrainList = terrainsData[selectedCountry] || []; // Assure un tableau vide si clé inexistante

  if (terrainList.length === 0) {
    return <h2>Aucun terrain disponible</h2>;
  }
  const toggleTerrain = (id: string) => {
    setOpenTerrain(openTerrain === id ? null : id);
  };

  const selectTerrain = (terrain: Terrain) => {
    setSelectedTerrain(terrain.id);
    localStorage.setItem(
      "currentRaid",
      JSON.stringify({
        selectedCountry,
        selectedTerrain: terrain.id,
        terrainDetails: terrain,
      }),
    );
  };

  return (
    <div className="newRaid-options-main">
      <h1>Choisissez {itemChoice} :</h1>
      {terrainList.map((terrain) => (
        <button
          type="button"
          onClick={() => toggleTerrain(terrain.id)}
          key={terrain.id}
          className={
            selectedTerrain === terrain.id && openTerrain === terrain.id
              ? "options-container-selected-open"
              : selectedTerrain === terrain.id
                ? "options-container-selected"
                : openTerrain === terrain.id
                  ? "options-container-open"
                  : "options-container"
          }
        >
          <h2>{terrain.name}</h2>
          {openTerrain === terrain.id ? (
            <>
              <h2>{terrain.description}</h2>
              <h2>Difficulté : {terrain.difficulty}</h2>
              <h2>Gain : {terrain.reward}</h2>
              <div className="select-button-position">
                <ButtonBlue
                  texte="Sélectionner"
                  link=""
                  onClick={() => selectTerrain(terrain)}
                />
              </div>
            </>
          ) : (
            <h2>Difficulté : {terrain.difficulty}</h2>
          )}
        </button>
      ))}
    </div>
  );
};

export default NewRaidOptionCountry;
