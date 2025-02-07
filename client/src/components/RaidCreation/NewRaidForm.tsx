import { useEffect, useState } from "react";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonGrey from "../Button/ButtonGrey";
import "./css/NewRaidForm.css";

const newRaidForm = () => {
  const [raidName, setRaidName] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [currentRaid, setCurrentRaid] = useState<{
    raidName: string;
    selectedCountry: string;
  } | null>(null);

  useEffect(() => {
    const savedRaid = localStorage.getItem("currentRaid");
    if (savedRaid) {
      const raid = JSON.parse(savedRaid);
      setCurrentRaid(raid);
      setRaidName(raid.raidName);
      setSelectedCountry(raid.selectedCountry);
    }
  }, []);

  const handleSaveRaid = () => {
    if (!raidName || !selectedCountry) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const newRaid = { raidName, selectedCountry };

    localStorage.clear();
    localStorage.setItem("currentRaid", JSON.stringify(newRaid));
    setCurrentRaid(newRaid);
  };

  const handleClearStorage = () => {
    localStorage.removeItem("currentRaid");
  };

  return (
    <div className="newRaidForm">
      <div className="textContainer">
        <h1>Nouveau raid</h1>
        {currentRaid && (
          <div className="currentRaidInfo">
            <p>
              Raid actuel : {currentRaid.raidName} -{" "}
              {currentRaid.selectedCountry}
            </p>
          </div>
        )}
      </div>
      <div className="formSectionsMain">
        <div className="formSections">
          <h2>Nom de votre raid</h2>
          <input
            type="text"
            id="raid-name"
            placeholder="Ex : Road to France"
            value={raidName}
            onChange={(e) => setRaidName(e.target.value)}
          />
        </div>
        <div className="formSections">
          <h2>Quel pays souhaitez-vous raid ?</h2>
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Choisir un pays</option>
            <option value="France">France</option>
            <option value="Angleterre">Angleterre</option>
            <option value="Danemark">Danemark</option>
          </select>
        </div>
      </div>
      <div className="buttonContainer">
        <ButtonBlue
          texte="Créer un raid"
          link={"/new_raid_option"}
          onClick={handleSaveRaid}
        />
        <ButtonGrey texte="Annuler" link={"/"} onClick={handleClearStorage} />
      </div>
    </div>
  );
};

export default newRaidForm;
