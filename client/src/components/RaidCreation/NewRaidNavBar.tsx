import ButtonBlue from "../Button/ButtonBlue";
import ButtonGrey from "../Button/ButtonGrey";
import "./css/NewRaidNavBar.css";

interface ButtonBlueProps {
  link: string;
}

const NewRaidNavBar = ({ link }: ButtonBlueProps) => {
  const handleClearStorage = () => {
    localStorage.removeItem("currentRaid");
  };

  return (
    <div className="newRaid-NavBar-main">
      <h1>Creation d’un raid</h1>
      <div className="raidNav-button-container">
        <ButtonBlue texte="Retour" link={link} />
        <ButtonGrey texte="Annuler" link={"/"} onClick={handleClearStorage} />
      </div>
    </div>
  );
};

export default NewRaidNavBar;
