import ButtonBlue from "../../Button/ButtonBlue";
import "./TitleNosGuerrier.css";
function TitleNosGuerrier() {
  return (
    <div className="DescriptionNosGuerrier">
      <div>
        <div className="PetitTexte">
          Votre surivie ne peu etre garantie et nous ne sommes en aucun cas
          responssable en cas d’accident ou de mort
        </div>
      </div>
      <h2>Embarqué pour des raids mortel</h2>
      <p>
        Venez rencontrer nos meilleurs Vikings et préparez-vous à vivre une
        expérience unique ! Que vous soyez un guerrier en herbe ou un barbare
        aguerri, le plaisir est garanti !
      </p>
      <ButtonBlue texte="nos guerrier" link={""} />
    </div>
  );
}
export default TitleNosGuerrier;
