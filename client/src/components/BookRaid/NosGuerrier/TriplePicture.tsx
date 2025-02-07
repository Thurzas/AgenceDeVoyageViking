import "./TriplePicture.css";
import imageGenerique from "../../../assets/images/imageGenerique.png";
function TriplePitcure() {
  return (
    <div className="TextTriplePicture">
      <p>
        Plongez dans le monde riche en adrénaline des raids vikings
        personnalisables. Notre agence spécialisée propose une large gamme
        d'options, allant des armes et des bateaux à l'assurance et .. autres.
      </p>
      <div className="ImgTriplePicture">
        <img src={imageGenerique} alt="Ragnar" />
        <img
          className="ImgTriplePictureMidle"
          src={imageGenerique}
          alt="Ragnar"
        />
        <img src={imageGenerique} alt="Ragnar" />
      </div>
    </div>
  );
}
export default TriplePitcure;
