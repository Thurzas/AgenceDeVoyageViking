import "./imgRight.css";
import imageGenerique from "../../assets/images/imageGenerique.png";
function ImgRight() {
  return (
    <div className="ImgRight">
      <img src={imageGenerique} alt="Ragnar" />
      <p>
        Les infos de votre raid peuvent etre vendu si vous ne prennez pas
        l’assurance
      </p>
    </div>
  );
}
export default ImgRight;
