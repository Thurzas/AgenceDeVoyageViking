import ButtonBlue from "../Button/ButtonBlue";
import "./TitleLeft.css";
function TitleLeft() {
  return (
    <div className="TitleLeft">
      <h2>Libérez Votre Esprit Viking</h2>
      <p>
        Plongez dans des raids vikings palpitants avec notre agence. Choisissez
        armes, bateaux et équipements pour une aventure épique en France en
        Angletaire ou encore le Danemark. Optez pour des options uniques comme
        l'assurance pillage ou trahison.
      </p>
      <div className="ButtonPositionTitleLeft">
        <ButtonBlue texte="rejoindre un raid" link={""} />
      </div>
    </div>
  );
}
export default TitleLeft;
