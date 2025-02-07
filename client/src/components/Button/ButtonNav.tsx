import ButtonBlue from "./ButtonBlue";
import ButtonGrey from "./ButtonGrey";
import "./css/ButtonNav.css";

interface ButtonGreyProps {
  texte: string;
  link: string;
}
function ButtonNav({ texte }: ButtonGreyProps) {
  return (
    <div className="ButtonNav">
      <ButtonBlue texte="Créer un raid" link={"/new-raid"} />
      <ButtonGrey texte={texte} link={"/"} />
    </div>
  );
}
export default ButtonNav;
