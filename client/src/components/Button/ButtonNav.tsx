import ButtonBlue from "./ButtonBlue";
import ButtonGrey from "./ButtonGrey";
import "./css/ButtonNav.css";
function ButtonNav() {
  return (
    <div className="ButtonNav">
      <ButtonBlue texte="Créer un raid" link={"/new-raid"} />
      <ButtonGrey texte="Annuler" link={"/"} />
    </div>
  );
}
export default ButtonNav;
